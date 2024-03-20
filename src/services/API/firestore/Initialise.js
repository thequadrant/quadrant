import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Firebase config
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
