// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0B_OkTvrZSFC8IrEzU9epTglYEMqscWY",
  authDomain: "insta-clone-9c6cb.firebaseapp.com",
  projectId: "insta-clone-9c6cb",
  storageBucket: "insta-clone-9c6cb.appspot.com",
  messagingSenderId: "367602540769",
  appId: "1:367602540769:web:930362ccfd2984360e17a0",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
