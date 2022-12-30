// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLHxlA0iXqbv7oQs2d9KbaUD-IMPSEBTo",
  authDomain: "ntut-web-by-alex-001-dd6cd.firebaseapp.com",
  databaseURL: "https://ntut-web-by-alex-001-dd6cd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ntut-web-by-alex-001-dd6cd",
  storageBucket: "ntut-web-by-alex-001-dd6cd.appspot.com",
  messagingSenderId: "937280763349",
  appId: "1:937280763349:web:6a8aceff4db39492ccb95c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
