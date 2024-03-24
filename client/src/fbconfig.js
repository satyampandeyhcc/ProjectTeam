// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCXmsRH8RvOcljXGQU8Q29TIwldslkZr4",
  authDomain: "bikeridingventure.firebaseapp.com",
  projectId: "bikeridingventure",
  storageBucket: "bikeridingventure.appspot.com",
  messagingSenderId: "191973728566",
  appId: "1:191973728566:web:334d58c84238dd71e89397",
  measurementId: "G-VJGJWGKYS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {storage}