import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // Thông tin cấu hình Firebase của bạn
  apiKey: "AIzaSyCneBNnhVQiA5NNrKZNP-HE8kZDvn4jLeI",
  authDomain: "testtoday-238ff.firebaseapp.com",
  databaseURL: "https://testtoday-238ff-default-rtdb.firebaseio.com",
  projectId: "testtoday-238ff",
  storageBucket: "testtoday-238ff.appspot.com",
  messagingSenderId: "820865585210",
  appId: "1:820865585210:web:88af27154eb158d0292503",
  measurementId: "G-HQ7QDHS4GJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export default db;
export { auth, signInWithPopup, GoogleAuthProvider };
