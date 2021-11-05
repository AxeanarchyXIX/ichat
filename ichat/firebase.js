// Import the functions you need from the SDKs you need
//import * as firebase from 'firebase';
//import {initializeApp} from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGXjkfaXendqa71rmE3D85SOstCEGQ4iw",
    authDomain: "chat-app-1344d.firebaseapp.com",
    projectId: "chat-app-1344d",
    storageBucket: "chat-app-1344d.appspot.com",
    messagingSenderId: "493476756868",
    appId: "1:493476756868:web:1264ba59ab35f85be371d1"
  };
// Initialize Firebase
let app;

if(firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth};



