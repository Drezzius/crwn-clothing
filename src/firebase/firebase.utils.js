import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCF6uJzx3dUOu6LSwyrK2Tbkha87rec14w",
    authDomain: "crwn-clothing-db-d100f.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-d100f.firebaseio.com",
    projectId: "crwn-clothing-db-d100f",
    storageBucket: "crwn-clothing-db-d100f.appspot.com",
    messagingSenderId: "953127781786",
    appId: "1:953127781786:web:ab3f6838b1eeebf124a623"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get()
  
  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('Error creating user: ', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;