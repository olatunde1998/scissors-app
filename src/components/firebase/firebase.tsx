
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYtSpejiBYiEWFucv0IQKI3VRQW93c4bY",
  authDomain: "scissors-app-1c6a5.firebaseapp.com",
  projectId: "scissors-app-1c6a5",
  storageBucket: "scissors-app-1c6a5.appspot.com",
  messagingSenderId: "435135043069",
  appId: "1:435135043069:web:74051c863ab9c18908f594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const providers = new GithubAuthProvider();