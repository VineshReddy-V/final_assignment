// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


export const firebaseConfig = {
  apiKey: "AIzaSyBtCd6t5vM5k24LPXmXIBEIDK6Oewz0bs8",
  authDomain: "vinesh-contact.firebaseapp.com",
  projectId: "vinesh-contact",
  storageBucket: "vinesh-contact.appspot.com",
  messagingSenderId: "266838855790",
  appId: "1:266838855790:web:bbf8ea834e348f4e30167f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
