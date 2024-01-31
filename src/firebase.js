import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAKZWX137PJ9MYYUU3m6BktEb5mmQa4TxE",
  authDomain: "disneyplus-clone-f33b4.firebaseapp.com",
  projectId: "disneyplus-clone-f33b4",
  storageBucket: "disneyplus-clone-f33b4.appspot.com",
  messagingSenderId: "624296769912",
  appId: "1:624296769912:web:e618215b70ee1fdfe8308d",
  measurementId: "G-MKWZS9GKQH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app); 

export {auth,provider,storage}
export default db;
