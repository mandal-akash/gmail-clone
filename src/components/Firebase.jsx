import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyAvEMQKZVESImAs1ZXdCgk_CpnYhsAhakg",
    authDomain: "clone-29fe1.firebaseapp.com",
    projectId: "clone-29fe1",
    storageBucket: "clone-29fe1.appspot.com",
    messagingSenderId: "811257759571",
    appId: "1:811257759571:web:ce3d7b2ef99d24e77843a6"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();



export { db, auth , provider};