import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDXew1U4jzy1MjRNhFdFFKHrenEEGSGsjU",
    authDomain: "buy-kenya.firebaseapp.com",
    projectId: "buy-kenya",
    storageBucket: "buy-kenya.appspot.com",
    messagingSenderId: "78144482614",
    appId: "1:78144482614:web:ff114225eae80fa7f05797",
    measurementId: "G-RRL36RYW9R"
  };

const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);
const auth = getAuth();


export { db, auth };