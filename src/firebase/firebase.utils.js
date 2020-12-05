// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const developmentConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const productionConfig = {};

const firebaseConfig =
  process.env.NODE_ENV == "development" ? developmentConfig : productionConfig;

// Initialize Firebase
class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
    this.storage = firebase.storage();
  }

  signIn(email, password) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("You successfully signed in.");
      })
      .catch((err) => alert(err.message));
  }

  signUp(username, email, password) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Your account successfully created. You can log in now.");
        this.auth.currentUser.updateProfile({ displayName: username });
        this.auth
          .signOut()
          .then(() => {
            console.log("Signed Out");
          })
          .catch((err) => alert(err.message));
      })
      .catch((err) => alert(err.message));
  }

  logOut() {
    this.auth
      .signOut()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((err) => alert(err.message));
  }

  // forgot password sendPasswordResetEmail

  // register registerWithEmailAndPassword

  // sign in with google GoogleAuthProvider
}

export default new Firebase();
