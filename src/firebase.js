import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8WW-DaygNyk8MEqy6PZdqY1bbPNQXt3A",
  authDomain: "home-llc.firebaseapp.com",
  projectId: "home-llc",
  storageBucket: "home-llc.appspot.com",
  messagingSenderId: "95381393373",
  appId: "1:95381393373:web:072333307226d2169bb034",
  measurementId: "G-EZGSQY4XFK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
