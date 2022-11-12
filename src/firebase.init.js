// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARU2liSZreIV0I1v2Tnc_QWjlmlV1CrXU",
  authDomain: "pitha-service.firebaseapp.com",
  projectId: "pitha-service",
  storageBucket: "pitha-service.appspot.com",
  messagingSenderId: "247207938509",
  appId: "1:247207938509:web:4ef7396d946e9aca785c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;