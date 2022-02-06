import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyBhnIz8nyhmbuhREcpIFMsKQZ4el4E9ZG0",

    authDomain: "next-auth-example-d83b8.firebaseapp.com",

    projectId: "next-auth-example-d83b8",

    storageBucket: "next-auth-example-d83b8.appspot.com",

    messagingSenderId: "532236949591",

    appId: "1:532236949591:web:4b59981eeaee40347a6b12"

};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };