import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCQwC4Omogv90Goyh3Kz5XWGZxHDVkdjE4",
    authDomain: "clone-d25f1.firebaseapp.com",
    databaseURL: "https://clone-d25f1.firebaseio.com",
    projectId: "clone-d25f1",
    storageBucket: "clone-d25f1.appspot.com",
    messagingSenderId: "898301001954",
    appId: "1:898301001954:web:891d960a24ac08250f5ebb",
    measurementId: "G-QFVM04X50X"
};

const  firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};