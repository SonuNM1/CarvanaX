
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carvanax-5836c.firebaseapp.com",
  projectId: "carvanax-5836c",
  storageBucket: "carvanax-5836c.firebasestorage.app",
  messagingSenderId: "694462832173",
  appId: "1:694462832173:web:37524e672bbab6816d22a4",
  measurementId: "G-VGXJ77KQNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)