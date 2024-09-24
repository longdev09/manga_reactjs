import * as typeActions from "../typeActions";
import { db } from "../../firebase/config";
import { v4 as uuidv4 } from "uuid";
import {
  setDoc,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  add,
  collection,
} from "firebase/firestore";
const initialState = {};

const addComment = async (comic_id) => {
  // Tạo reference đến tài liệu
  const userDocRef = doc(db, "comments", comic_id);

  let key = uuidv4();
  const newField = {
    [`${key}`]: {
      newField: "New Valuesssss",
    }, // Trường mới hoặc cập nhật trường hiện có
  };

  try {
    // Lấy tài liệu
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      // Nếu tài liệu đã tồn tại, cập nhật tài liệu với các trường mới
      await setDoc(userDocRef, newField, { merge: true });
    } else {
      // Nếu tài liệu chưa tồn tại, tạo tài liệu mới với các trường đã chỉ định
      await setDoc(userDocRef, newField);
      console.log("Document successfully created!");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.ADD_COMMENT:
      return addComment(action.payload.comic_id);
    default:
      return state;
  }
};

export default commentReducer;
