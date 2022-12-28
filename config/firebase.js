import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfRgWv0Vu4H4DFpWZn-LkWWa8lyEsQs5o",
  authDomain: "e-commerce-3fd24.firebaseapp.com",
  projectId: "e-commerce-3fd24",
  storageBucket: "e-commerce-3fd24.appspot.com",
  messagingSenderId: "934026511362",
  appId: "1:934026511362:web:fdedafb9e0004a6911931b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();
export const storage = getStorage();