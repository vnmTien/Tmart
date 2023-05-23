// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl2GtRUfGIay_OjsAXAa2U1rHUmV033aw",
  authDomain: "tmart-51b3d.firebaseapp.com",
  projectId: "tmart-51b3d",
  storageBucket: "tmart-51b3d.appspot.com",
  messagingSenderId: "89441925543",
  appId: "1:89441925543:web:2479151fa205edb42d1e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;