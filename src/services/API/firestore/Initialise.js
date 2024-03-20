import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDHWa6jBnLadN-O_a3F5-lZq0y5uzTvW9U",

  authDomain: "quadrant-dev.firebaseapp.com",

  projectId: "quadrant-dev",

  storageBucket: "quadrant-dev.appspot.com",

  messagingSenderId: "764599056515",

  appId: "1:764599056515:web:78c5761c2f074cf24543b6",

  measurementId: "G-BJ4JE1FXMF",

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
