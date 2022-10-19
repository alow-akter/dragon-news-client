// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbs9JOFIxJEk5xgAIas4Qoro8-5oIQk2U",
    authDomain: "dagon-news-auth.firebaseapp.com",
    projectId: "dagon-news-auth",
    storageBucket: "dagon-news-auth.appspot.com",
    messagingSenderId: "829397230537",
    appId: "1:829397230537:web:a184167575bafe2680fe18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 