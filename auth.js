// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5QcVkCTr1KhwqBvRARI3yEVMTocyCfsc",
  authDomain: "trackpay-app-fa1ff.firebaseapp.com",
  projectId: "trackpay-app-fa1ff",
  storageBucket: "trackpay-app-fa1ff.firebasestorage.app",
  messagingSenderId: "563980092933",
  appId: "1:563980092933:web:5ba15609ed78dc5b1afe6c",
  measurementId: "G-9Q76DWEJR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);