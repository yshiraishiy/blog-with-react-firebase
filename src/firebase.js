import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvFaOw1wyrGyrqzNfemdOmi0rAhBoJugI",
  authDomain: "blog-350c6.firebaseapp.com",
  projectId: "blog-350c6",
  storageBucket: "blog-350c6.firebasestorage.app",
  messagingSenderId: "1021539567033",
  appId: "1:1021539567033:web:42f4d1753b56cdc52fe268",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
