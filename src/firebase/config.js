import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwovSK2q7apBydqZc5Vqjfak-HN-k62rI",
  authDomain: "wolverineflicks.firebaseapp.com",
  projectId: "wolverineflicks",
  storageBucket: "wolverineflicks.appspot.com",
  messagingSenderId: "889794144081",
  appId: "1:889794144081:web:8ffac0ad8471b19d385570",
  measurementId: "G-FHDLQKJGNK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};