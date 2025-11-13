// src/firebase.ts
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref as dbRef,
  onValue as dbOnValue,
  get as dbGet,
  set as dbSet,
} from "firebase/database";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQFKqKGmVpNv4aHQhLfldQ6CouBmtYwYY",
  authDomain: "watchhamelite-primev1.firebaseapp.com",
  databaseURL: "https://watchhamelite-primev1-default-rtdb.firebaseio.com",
  projectId: "watchhamelite-primev1",
  storageBucket: "watchhamelite-primev1.firebasestorage.app",
  messagingSenderId: "868246294583",
  appId: "1:868246294583:web:70da61aadda9b1ed4defb2",
  measurementId: "G-20Z4Q1H7D9"
};

// Initialize Firebase (ensure it's only initialized once)
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database & Storage
const database = getDatabase(app);
const storage = getStorage(app);

// Export everything you need
export {
  app,
  database,
  storage,
  dbRef as ref,
  dbOnValue as onValue,
  dbGet as get,
  dbSet as set,
};

export default app;
