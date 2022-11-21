// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNvs6dWYKPDMtB2MCsvyTNL-7ii7cP__c",
  authDomain: "stackathon-3f2b4.firebaseapp.com",
  projectId: "stackathon-3f2b4",
  storageBucket: "stackathon-3f2b4.appspot.com",
  messagingSenderId: "95399243860",
  appId: "1:95399243860:web:978cfe44cc28e2c2077dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);