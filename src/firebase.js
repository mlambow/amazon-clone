import { initializeApp } from "firebase/app";
import "firebase/auth"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpLCVh-VENIHpScEDFOZj17DdC3tHk_Z0",
  authDomain: "clone-w.firebaseapp.com",
  projectId: "clone-w",
  storageBucket: "clone-w.appspot.com",
  messagingSenderId: "842544872228",
  appId: "1:842544872228:web:c1140f5caf87fcfa46d1b1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);