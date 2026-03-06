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

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";



const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};


const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
.then(() => {

alert("Account created!");
window.location.href = "index.html";

window.googleLogin = function(){

signInWithPopup(auth, provider)

.then((result)=>{

const user = result.user;

console.log("Google User:", user);

window.location.href = "index.html";

})

.catch((error)=>{

alert(error.message);

});

}
  
})
.catch(error => alert(error.message));

}

window.login = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
.then(() => {

window.location.href = "index.html";

})
.catch(error => alert(error.message));

}

window.logout = function(){

signOut(auth).then(() => {

window.location.href = "login.html";

})

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


