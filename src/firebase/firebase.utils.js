import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD3WBrfdDfuVzwBHlA7I431gjE43RpIWiE",
  authDomain: "crwn-db-16a65.firebaseapp.com",
  databaseURL: "https://crwn-db-16a65.firebaseio.com",
  projectId: "crwn-db-16a65",
  storageBucket: "",
  messagingSenderId: "374438016542",
  appId: "1:374438016542:web:33a7677c57ebbbc5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
