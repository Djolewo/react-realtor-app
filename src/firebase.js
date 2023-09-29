// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQnec8YcUSj4MK407FGTk56rasODXWlU0",
  authDomain: "realtor-clone-react-9d292.firebaseapp.com",
  projectId: "realtor-clone-react-9d292",
  storageBucket: "realtor-clone-react-9d292.appspot.com",
  messagingSenderId: "445201029826",
  appId: "1:445201029826:web:03fe7e05b705a376a4395b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()