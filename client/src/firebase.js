// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gharvichar-670a9.firebaseapp.com",
  projectId: "gharvichar-670a9",
  storageBucket: "gharvichar-670a9.appspot.com",
  messagingSenderId: "997417113535",
  appId: "1:997417113535:web:6432ba54b659420eb9330a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);