// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDm5rjNfLZHf_7NXapEtumA_ZrtBjzzfKs",
    authDomain: "nlohub-4364b.firebaseapp.com",
    projectId: "nlohub-4364b",
    storageBucket: "nlohub-4364b.firebasestorage.app",
    messagingSenderId: "901022086865",
    appId: "1:901022086865:web:c3da1bc6280d8c547eb7f0",
    measurementId: "G-1K1225PD72",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;
