
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { getFirebaseConfig } from '../config/firebase-config';
import { getStorage } from "firebase/storage";

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);
export const db = getFirestore(app);
export var storage = getStorage(app);



export const signInUser = async (
  email, 
  password
) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}


export const createUser = async (
  email, 
  password
) => {
  if (!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const userStateListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}

export const SignOutUser = async () => await signOut(auth);
