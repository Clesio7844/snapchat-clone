import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDfXOqHgMyyGllXUSxU2pLEu94kSS1H2vs',
  authDomain: 'snapchat-clone-480bc.firebaseapp.com',
  projectId: 'snapchat-clone-480bc',
  storageBucket: 'snapchat-clone-480bc.appspot.com',
  messagingSenderId: '647567115216',
  appId: '1:647567115216:web:33ffbc19ca925fa1166fd5'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
