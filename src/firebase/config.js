// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvpdrCxK4OEGIF1ghs9TjRIX_3NczB8oU",
  authDomain: "manga-comics-b8dcf.firebaseapp.com",
  projectId: "manga-comics-b8dcf",
  storageBucket: "manga-comics-b8dcf.appspot.com",
  messagingSenderId: "711521624172",
  appId: "1:711521624172:web:259976bb7020606badf849",
  measurementId: "G-NGXHDSYWRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

const analytics = getAnalytics(app);
