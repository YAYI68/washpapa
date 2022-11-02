
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC4EAYDke8L6aojUovOmp0HofBt8vb4dEU",
  authDomain: "wash-papa.firebaseapp.com",
  databaseURL: "https://wash-papa-default-rtdb.firebaseio.com",
  projectId: "wash-papa",
  storageBucket: "wash-papa.appspot.com",
  messagingSenderId: "926525150262",
  appId: "1:926525150262:web:dd6972477592d817f1f497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
// export const storage = getStorage(app)