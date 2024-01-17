// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNtO_eIb97m0Hf60a2LOuA4_gylGHHjw8",
  authDomain: "ecommerce-project-39d27.firebaseapp.com",
  projectId: "ecommerce-project-39d27",
  storageBucket: "ecommerce-project-39d27.appspot.com",
  messagingSenderId: "774218324911",
  appId: "1:774218324911:web:b59bb04c0c8269d8cf6d5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;