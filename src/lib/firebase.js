import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAETmh9OVdH9P4iVWnvySiG90983A3Iw-g",
  authDomain: "amazo-app.firebaseapp.com",
  projectId: "amazo-app",
  storageBucket: "amazo-app.appspot.com",
  messagingSenderId: "597092568796",
  appId: "1:597092568796:web:3011d0f7d04ab96b22ee19",
  measurementId: "G-T2X5G8M4GN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
