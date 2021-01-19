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
declare global {
  interface Window {
    recaptchaVerifier: firebase.auth.RecaptchaVerifier;
    confirmationResult: firebase.auth.ConfirmationResult;
  }
}
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
// auth.languageCode = 'it';
// if (window.location.hostname === 'localhost') {
//   auth.useEmulator('http://localhost:9099');
// }
export default firebase;

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
        setMessage('');
      })
      .catch((error) => {
        console.log(error.message.split('.')[0]);
        setMessage(error.message.split('.')[0] + '.');
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
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setMessage(error.message.split('.')[0] + '.');
      });
  }
  signInWithPhoneNo() {
    auth
      .signInWithPhoneNumber('+917304366907', window.recaptchaVerifier)
      .then((confirmationResult) => {
        console.log('sad');
        window.confirmationResult = confirmationResult;
        // ...
        const code = prompt('code');
        confirmationResult
          .confirm(code!)
          .then((result) => {
            // User signed in successfully.
            console.log(result);
            // ...
          })
          .catch((error) => {
            console.log(error);
            // User couldn't sign in (bad verification code?)
            // ...
          });
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
        // ...
      });
  }
  captcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-verifier',
      {
        size: 'invisible',
        callback: (response: any) => {
          console.log(response);
          const appVerifier = window.recaptchaVerifier;
          console.log(appVerifier, 'logggg');

          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // this.signInWithPhoneNo();
        },
      }
    );
  }
  determinePhoneOrEmail(input: string) {
    const regex_email = /^[a-zA-Z][\w.-]*[a-zA-Z0-9]@([a-zA-Z0-9][\w.-]*[a-zA-Z0-9].[a-zA-Z][a-zA-Z.]*[a-zA-Z])$/;
    const regex_phone = /^[0-9]{1,45}/;
    return regex_email.test(input) || regex_phone.test(input);
  }
}

export const Authentications = new Auth();
