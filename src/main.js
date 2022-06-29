import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQQHZjb8TJPkM5vl6umsdFG9QcWeS2l2k",
  authDomain: "loot4thdb.firebaseapp.com",
  projectId: "loot4thdb",
  storageBucket: "loot4thdb.appspot.com",
  messagingSenderId: "259976048322",
  appId: "1:259976048322:web:fdf7bf201d158143eb555b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp)
