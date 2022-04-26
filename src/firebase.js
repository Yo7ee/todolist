// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKVodM5j7dxWWP4kRp_16-zPSvCYiaOo8",
    authDomain: "todolistyc.firebaseapp.com",
    databaseURL: "https://todolistyc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todolistyc",
    storageBucket: "todolistyc.appspot.com",
    messagingSenderId: "456447026755",
    appId: "1:456447026755:web:b9c74fb773abb05cb956f6",
    measurementId: "G-DKZX7P5KLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
