import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrRHhcnhba4Vp7DHzLmmX3wV5j8RI4vJQ",
  authDomain: "chatgpt-cloned.firebaseapp.com",
  projectId: "chatgpt-cloned",
  storageBucket: "chatgpt-cloned.appspot.com",
  messagingSenderId: "819158927697",
  appId: "1:819158927697:web:a5feffa4e87ed8b859eb70",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
