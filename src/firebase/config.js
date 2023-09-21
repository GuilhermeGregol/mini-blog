// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCEsTBy6nmWjJgobozEXasaTqgxmD6XjI",
    authDomain: "blog-guitarras.firebaseapp.com",
    projectId: "blog-guitarras",
    storageBucket: "blog-guitarras.appspot.com",
    messagingSenderId: "408603867777",
    appId: "1:408603867777:web:ee12d795a2ab66b93fab80",
    measurementId: "G-R1LFR9FHHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Banco de dados do Firebase
const db = getFirestore(app)
export {db};