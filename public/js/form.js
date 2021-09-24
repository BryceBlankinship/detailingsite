// Import the functions you need from the SDKs you need
import { initializeApp } from "/firebase/app";
import { getAnalytics } from "/firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcM8TB1ybuwB4-KRHZdSokvzxZIr5nvEA",
  authDomain: "detailingwebsite.firebaseapp.com",
  databaseURL: "https://detailingwebsite-default-rtdb.firebaseio.com",
  projectId: "detailingwebsite",
  storageBucket: "detailingwebsite.appspot.com",
  messagingSenderId: "538423621463",
  appId: "1:538423621463:web:f3765191985987d711b012",
  measurementId: "G-PR9TDNKL9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


  createUserWithEmailAndPassword(auth, document.getElementById('email'), document.getElementById('password'));