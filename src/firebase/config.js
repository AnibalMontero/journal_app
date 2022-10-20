import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: 'AIzaSyDXVDMDxPbhfuoKFvZynliew3pFpTNKvWU',
  authDomain: 'react-udemy-20707.firebaseapp.com',
  projectId: 'react-udemy-20707',
  storageBucket: 'react-udemy-20707.appspot.com',
  messagingSenderId: '128526817322',
  appId: '1:128526817322:web:efd838fe18746f93f7cb53',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
