// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgNvYqUNCVJRZSzBZp7JMpaJ7BxkM70Bc",
  authDomain: "alteva-92d8b.firebaseapp.com",
  projectId: "alteva-92d8b",
  storageBucket: "alteva-92d8b.appspot.com",
  messagingSenderId: "497258250057",
  appId: "1:497258250057:web:a6583f2090d6b0667e2498",
  measurementId: "G-GB6YWLSFF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)