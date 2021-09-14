import firebase from 'firebase/app'
// import { initializeApp } from "firebase/app" 
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCIJqpFh_WqmwZoNAIK_C0y3JzjOYJnRj4",
    authDomain: "vox-populi-8fb26.firebaseapp.com",
    projectId: "vox-populi-8fb26",
    storageBucket: "vox-populi-8fb26.appspot.com",
    messagingSenderId: "1001598383512",
    appId: "1:1001598383512:web:a353fc56d9af8caf33e7ed"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => {
      return app
  } 

  export const getFirestore = () => {
      return firebase.firestore(app)
  }