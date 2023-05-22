// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7lINoO6WBr46f_jr0AIOns0fLTTVOtsc",
  authDomain: "e-tracking-6d62e.firebaseapp.com",
  projectId: "e-tracking-6d62e",
  storageBucket: "e-tracking-6d62e.appspot.com",
  messagingSenderId: "444914233402",
  appId: "1:444914233402:web:b592cbf1be03fa6ef90503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app