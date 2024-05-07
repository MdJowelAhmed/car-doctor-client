// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3cXupBZVsB4m2-uDhynSRCbLIFc7RFFM",
  authDomain: "car-doctor-95b07.firebaseapp.com",
  projectId: "car-doctor-95b07",
  storageBucket: "car-doctor-95b07.appspot.com",
  messagingSenderId: "809544693965",
  appId: "1:809544693965:web:5c59a8d34a3a9c6b359184"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;