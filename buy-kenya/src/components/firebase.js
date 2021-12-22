import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDXew1U4jzy1MjRNhFdFFKHrenEEGSGsjU",
    authDomain: "buy-kenya.firebaseapp.com",
    projectId: "buy-kenya",
    storageBucket: "buy-kenya.appspot.com",
    messagingSenderId: "78144482614",
    appId: "1:78144482614:web:ff114225eae80fa7f05797",
    measurementId: "G-RRL36RYW9R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };