// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhLrrLJUo7PLbwx3_CPl0gahsJVp9R8OA",
  authDomain: "great-website-9cb28.firebaseapp.com",
  projectId: "great-website-9cb28",
  storageBucket: "great-website-9cb28.appspot.com",
  messagingSenderId: "228185855227",
  appId: "1:228185855227:web:ce39e31b04576d03928c5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;