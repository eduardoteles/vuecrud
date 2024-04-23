import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuVwBepVoAcSelQ78yqnWLdzK3VL10NEg",
    authDomain: "persondb-e1d3a.firebaseapp.com",
    projectId: "persondb-e1d3a",
    storageBucket: "persondb-e1d3a.appspot.com",
    messagingSenderId: "181768971723",
    appId: "1:181768971723:web:ff84dd492cf01a7a6b824e"
  };
  
  // Initialize Firebase
 initializeApp(firebaseConfig);

  // init firestore service
const db = getFirestore()
export default db