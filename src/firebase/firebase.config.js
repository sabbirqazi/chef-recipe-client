// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRiLKYTpyRMZl46bIhEwVe6QVQ9Lar9Mc",
  authDomain: "chef-recipe-hunter-77a78.firebaseapp.com",
  projectId: "chef-recipe-hunter-77a78",
  storageBucket: "chef-recipe-hunter-77a78.appspot.com",
  messagingSenderId: "801301960460",
  appId: "1:801301960460:web:0dda2291d105d320171b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;