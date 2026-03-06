import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getAuth, 
GoogleAuthProvider,
signInWithPopup,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.signup = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
.then(() => {

alert("Account created!");
window.location.href = "index.html";
});

.catch((error)=>{

alert(error.message));

}
window.googleLogin = function(){

signInWithPopup(auth, provider)

.then((result)=>{

const user = result.user;

console.log("Google User:", user);

window.location.href = "index.html";

});

.catch((error)=>{

alert(error.message));

}

window.login = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
.then(() => {

window.location.href = "index.html";

});
.catch(error => alert(error.message));

}

window.logout = function(){

signOut(auth).then(() => {

window.location.href = "login.html";

})
.catch((error) => {

console.error("Logout error:", error);

});

}

onAuthStateChanged(auth, user => {

if(user){

console.log("Logged in:", user.email);

}else{

if(window.location.pathname.includes("index.html")){
window.location.href = "login.html";
}

}

});








