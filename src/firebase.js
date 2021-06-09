import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBccpb5EyDnE6gD51kaqOGtvNrTtPnCns0",
  authDomain: "linkdin-245d4.firebaseapp.com",
  projectId: "linkdin-245d4",
  storageBucket: "linkdin-245d4.appspot.com",
  messagingSenderId: "822862569420",
  appId: "1:822862569420:web:7a8ec12bb9d41255158769",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;