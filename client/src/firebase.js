// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ncba-property-listing-3f61f.firebaseapp.com",
  projectId: "ncba-property-listing-3f61f",
  storageBucket: "ncba-property-listing-3f61f.firebasestorage.app",
  messagingSenderId: "227737349908",
  appId: "1:227737349908:web:5055ed64a81c10340a5c01"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);