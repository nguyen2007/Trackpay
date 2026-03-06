// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Your Firebase configuration
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
const auth = getAuth(app);


// Google provider
const provider = new GoogleAuthProvider();



/* --------------------------
EMAIL SIGN UP
--------------------------- */

window.signup = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)

.then((userCredential)=>{

alert("Account created successfully");

window.location.href = "index.html";

})

.catch((error)=>{

alert(error.message);

});

};



/* --------------------------
EMAIL LOGIN
--------------------------- */

window.login = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)

.then((userCredential)=>{

window.location.href = "index.html";

})

.catch((error)=>{

alert(error.message);

});

};



/* --------------------------
GOOGLE LOGIN
--------------------------- */

window.googleLogin = function(){

signInWithPopup(auth, provider)

.then((result)=>{

window.location.href = "index.html";

})

.catch((error)=>{

alert(error.message);

});

};



/* --------------------------
LOGOUT
--------------------------- */

window.logout = function(){

signOut(auth)

.then(()=>{

window.location.href = "login.html";

})

.catch((error)=>{

console.log(error);

});

};



/* --------------------------
AUTH PROTECTION
--------------------------- */

onAuthStateChanged(auth,(user)=>{

const path = window.location.pathname;

/* protect dashboard */

if(!user && path.includes("index.html")){

window.location.href="login.html";

}

/* prevent logged users from seeing login page */

if(user && path.includes("login.html")){

window.location.href="index.html";

}

});
