
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAgNvYqUNCVJRZSzBZp7JMpaJ7BxkM70Bc",
  authDomain: "alteva-92d8b.firebaseapp.com",
  projectId: "alteva-92d8b",
  storageBucket: "alteva-92d8b.appspot.com",
  messagingSenderId: "497258250057",
  appId: "1:497258250057:web:a6583f2090d6b0667e2498",
  measurementId: "G-GB6YWLSFF5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)