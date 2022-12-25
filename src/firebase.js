// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


export const firebaseConfig = {
  apiKey: "AIzaSyA7dSgsE4mPfDSC_uB692EBm-N_l8Ey6mU",
  authDomain: "chethan-contact.firebaseapp.com",
  projectId: "chethan-contact",
  storageBucket: "chethan-contact.appspot.com",
  messagingSenderId: "273546987628",
  appId: "1:273546987628:web:033d78e25bce14f6cff049"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
