
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB9wFAkIpA8O6Hd7MJyTKkiUACCEM7b6MQ",
    authDomain: "tp-igl-374116.firebaseapp.com",
    projectId: "tp-igl-374116",
    storageBucket: "tp-igl-374116.appspot.com",
    messagingSenderId: "889650749204",
    appId: "1:889650749204:web:f5506534082c52e3a7ac01",
    measurementId: "G-YWJ4YXC7T4"
})

const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 


export {db,auth};