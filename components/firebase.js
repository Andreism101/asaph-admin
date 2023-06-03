import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDQqrDNdMWYo_Pi5WYBLJR8TeFAaysEbwM",
    authDomain: "loanmic.firebaseapp.com",
    databaseURL: "https://loanmic-default-rtdb.firebaseio.com",
    projectId: "loanmic",
    storageBucket: "loanmic.appspot.com",
    messagingSenderId: "137538650287",
    appId: "1:137538650287:web:51a07970ca594ee4ab545a",
    measurementId: "G-LKLCB9RRFR"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();