// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWsT5sgtMGwQKz8n11ch23VQW8uDd9az0",
  authDomain: "pizza-point-95a08.firebaseapp.com",
  projectId: "pizza-point-95a08",
  storageBucket: "pizza-point-95a08.appspot.com",
  messagingSenderId: "202441377608",
  appId: "1:202441377608:web:42339a3e63b7fdf110d57d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;