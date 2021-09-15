import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDcvysx54p1gDzE6ZEfusOzo-ydN2TfXU8",
    authDomain: "jm-crwn-db.firebaseapp.com",
    projectId: "jm-crwn-db",
    storageBucket: "jm-crwn-db.appspot.com",
    messagingSenderId: "519901435767",
    appId: "1:519901435767:web:9216793c60d7c9e28d3372",
    measurementId: "G-K8B6R6XB0P"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.error('error creating user', err.message);
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// Google Authentication Util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;