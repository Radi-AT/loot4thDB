import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
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
const firebaseInstance = initializeApp(firebaseConfig);

// Exports
export const db = getFirestore(firebaseInstance);

const app = createApp(App);
app.use(router);
app.mount("#app");
