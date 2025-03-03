import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoCK58mbr_oC3KRbRu9TWMHWN8-m_lF1s",
    authDomain: "academy-project-29e02.firebaseapp.com",
    projectId: "academy-project-29e02",
    storageBucket: "academy-project-29e02.firebasestorage.app",
    messagingSenderId: "530308428680",
    appId: "1:530308428680:web:a77e52c8cdf1647f35403d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, doc, setDoc };