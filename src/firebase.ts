import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/functions';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

let firebaseConfig: any = {
  apiKey: 'AIzaSyB7jF86hf3ixdcOujGQCpNDjgnW3mVCw98',
  authDomain: 'arokiym-d2d86.firebaseapp.com',
  projectId: 'arokiym-d2d86',
  storageBucket: 'arokiym-d2d86.appspot.com',
  messagingSenderId: '1074264374617',
  appId: '1:1074264374617:web:33e5dc7dcd58387e58a048',
  measurementId: 'G-7H94G3TNCQ',
};

firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();

export const addAdmin = firebase.functions().httpsCallable('addAdmin');
export const auth = firebase.auth();
export const db = firebase.firestore();
export const rtdb = firebase.database();
export const serverTimeStamp = () =>
  firebase.firestore.FieldValue.serverTimestamp();
const provider = new firebase.auth.GoogleAuthProvider();
const fbprovider = new firebase.auth.FacebookAuthProvider();
export default firebase;
if (window.location.hostname === 'localhost') {
  auth.useEmulator('http://localhost:9099');
}

class Auth {
  googleLogin() {
    auth.signInWithPopup(provider);
  }

  facebookLogin() {
    auth.signInWithPopup(fbprovider);
  }

  logOut() {
    auth.signOut().then(() => {
      console.log('loggedout');
    });
  }
  signInWithEmailAndPass(
    email: string,
    password: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
  ) {
    console.log('sign');

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setMessage('E-mail or password is invalid.');
      });
  }
  creatUserWithEmailAndPass(
    name: string,
    email: string,
    password: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
  ) {
    let currentUser: firebase.User | null;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setMessage('emai is sent to your email adress');
        currentUser = auth.currentUser;
        this.signInWithEmailAndPass(email, password, setMessage);
      })
      .then(() => {
        currentUser?.updateProfile({ displayName: name });
      });
  }
}

export const Authentications = new Auth();
