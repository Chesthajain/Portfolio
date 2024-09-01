// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9EFPHGeA_U6wfmyIcX2NsbQr072vXC-A",
  authDomain: "chestha-portfolio.firebaseapp.com",
  projectId: "chestha-portfolio",
  storageBucket: "chestha-portfolio.appspot.com",
  messagingSenderId: "185712749391",
  appId: "1:185712749391:web:80c5a5235e89c11706f33a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
