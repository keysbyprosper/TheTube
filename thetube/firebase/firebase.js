import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  addDoc,
  setDoc,
  collection,
  doc,
  writeBatch,
  query,
  where,
  getDoc,
  deleteDoc,
  onSnapshot,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};

// Initialize Firebase
export const fireInit = () => {
  const app = initializeApp(firebaseConfig);
};
const app = fireInit();
export const db = getFirestore(app);
