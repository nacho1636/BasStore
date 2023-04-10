import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeq_TPJIbGZEtbMAhlU47NoVsvAa8c33A",
  authDomain: "basstore-f8512.firebaseapp.com",
  projectId: "basstore-f8512",
  storageBucket: "basstore-f8512.appspot.com",
  messagingSenderId: "238414343058",
  appId: "1:238414343058:web:f9dc4533315b32f94a2f4b"
};


// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(<App />)
