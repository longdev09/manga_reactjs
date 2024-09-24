import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../Button";
import { addComment } from "../../redux/actions";

import { useDispatch, useSelector } from "react-redux";
import { openModalLogin } from "../../redux/actions";
export default function TextAddComment({ comic_id }) {
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.authReducer);
  const handleComment = () => {
    // if (profile == null) {
    //   dispatch(openModalLogin());
    // }

    dispatch(addComment(comic_id, profile));
  };
  return (
    <>
      <div className="mt-9 flex">
        <div className="w-20 mr-5 rounded-full">
          <img
            className="rounded-xl"
            src={
              "https://files.fullstack.edu.vn/f8-prod/avatars/Ve6GzW5LbaWAuNJSXNsl7BxE0Rprefta71w3r6u8.png"
            }
          />
        </div>
        <div className="flex-1">
          <ReactQuill className="text-white rounded-xl" theme="snow" />
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <Button onclick={handleComment} className="p-3 bg-[#5a9dcf]">
          Comment
        </Button>
      </div>
    </>
  );
}
