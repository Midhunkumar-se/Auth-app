// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-cc7ca.firebaseapp.com",
  projectId: "mern-auth-cc7ca",
  storageBucket: "mern-auth-cc7ca.appspot.com",
  messagingSenderId: "732622029995",
  appId: "1:732622029995:web:b7217b12afc10029e263ee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
