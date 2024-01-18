
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCdKEhjuAUSQX0oXBCig-Mti0Pk-SFNU58",
    authDomain: "online-store-a1a26.firebaseapp.com",
    projectId: "online-store-a1a26",
    storageBucket: "online-store-a1a26.appspot.com",
    messagingSenderId: "306556224052",
    appId: "1:306556224052:web:e4001be96cae87ebbbc061"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

