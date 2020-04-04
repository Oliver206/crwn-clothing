import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC476RdhjJetGFrzm1Ou1C0IOkvkmBQ-tQ",
  authDomain: "crwn-db-eda86.firebaseapp.com",
  databaseURL: "https://crwn-db-eda86.firebaseio.com",
  projectId: "crwn-db-eda86",
  storageBucket: "crwn-db-eda86.appspot.com",
  messagingSenderId: "1054865550327",
  appId: "1:1054865550327:web:345b4b5b5b31fe9ec45cf2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

// exportieren, sodass man es nutzen kann, wo man "authentication" braucht.
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
// always trigger google popup, whenever we use Google Auth Provider for authentication for signin etc.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
