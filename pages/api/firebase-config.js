import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* apiKey: "AIzaSyAYbi3-fytL3cr8kY_g1oLUM6iQCa4PnN4",
  authDomain: "sign-up-d13cd.firebaseapp.com",
  projectId: "sign-up-d13cd",
  storageBucket: "sign-up-d13cd.appspot.com",
  messagingSenderId: "64906700086",
  appId: "1:64906700086:web:3a8b12ce1e53996f51ff97",
  measurementId: "G-HBY8VY8HNL", */
const firebaseConfig = {
  apiKey: "AIzaSyAYbi3-fytL3cr8kY_g1oLUM6iQCa4PnN4",
  authDomain: "sign-up-d13cd.firebaseapp.com",
  projectId: "sign-up-d13cd",
  storageBucket: "sign-up-d13cd.appspot.com",
  messagingSenderId: "64906700086",
  appId: "1:64906700086:web:3a8b12ce1e53996f51ff97",
  measurementId: "G-HBY8VY8HNL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const currentUser = auth.currentUser;
