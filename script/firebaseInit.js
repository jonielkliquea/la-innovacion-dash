import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEXUq4jfjiydxs1ARWeAtxlBBhfCrV-QE",
  authDomain: "innovacentro-sana4.firebaseapp.com",
  databaseURL: "https://innovacentro-sana4-default-rtdb.firebaseio.com",
  projectId: "innovacentro-sana4",
  storageBucket: "innovacentro-sana4.firebasestorage.app",
  messagingSenderId: "727730443470",
  appId: "1:727730443470:web:37d4dc7160287e9a15ac9f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function userObserve() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, displayName, email, emailVerified, photoURL, isAnonymous, providerData } = user;

      function UserDataView() {
        const logoutButton = document.getElementById('logout');
        if (logoutButton) {
          logoutButton.style.display = "block";
        }
      }

      UserDataView();

      user.getIdToken(true).then((token) => {
      localStorage.setItem('firebaseToken', token);

      });

    } else {
        console.log("error en firebaseInit 39 al 40")
     /* window.location.href = './index.html';
      localStorage.clear();*/
    }
  });
}

userObserve();

function userLogOut() {
  signOut(auth)
    .then(() => {
      window.location.href = 'http://appinnovacentro.42web.io/';

    })
    .catch((error) => {
    });
}


document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById('logout');
  if (logoutButton) {
    logoutButton.addEventListener("click", userLogOut);
  }
});

function tokenVerify() {
  const tokenTime = parseInt(localStorage.getItem("tokenTime"), 10);
  const tokenTimeComparison = Date.now();
  
  if (!tokenTime || (tokenTime + 3600000) < tokenTimeComparison) {
    userLogOut();
  }
}

setInterval(tokenVerify, 1000);