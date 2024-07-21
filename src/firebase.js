// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMS76Oo7UxqcRq-Q4VOoVVBMhJmAlbFBY",
  authDomain: "elbowcart-e7393.firebaseapp.com",
  projectId: "elbowcart-e7393",
  storageBucket: "elbowcart-e7393.appspot.com",
  messagingSenderId: "278107661489",
  appId: "1:278107661489:web:88b280289c030d0b68ae90",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();