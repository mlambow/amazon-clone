import { initializeApp } from "firebase/app";
import "firebase/auth"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk9JgxZ7_chZ1QgLKcq75cUocgqHuL1gs",
  authDomain: "clone-8f3ad.firebaseapp.com",
  projectId: "clone-8f3ad",
  storageBucket: "clone-8f3ad.appspot.com",
  messagingSenderId: "658398561256",
  appId: "1:658398561256:web:3280db1c03b0df59d85a5d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);