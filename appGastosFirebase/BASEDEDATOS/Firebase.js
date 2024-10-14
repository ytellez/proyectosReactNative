
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyGQWrtaTzCtLkTdnBcUJHxZYY2DiLwsU",
  authDomain: "appgastosfirebase.firebaseapp.com",
  projectId: "appgastosfirebase",
  storageBucket: "appgastosfirebase.appspot.com",
  messagingSenderId: "610795969716",
  appId: "1:610795969716:web:9c69ac274b7cc104c60be1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;