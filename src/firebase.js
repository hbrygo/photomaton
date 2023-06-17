import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, signInAnonymously } from 'firebase/auth';

/*
  If you wish to generate a QRcode and save your picture on Firebase
  you first need to create a Firebase project.
  Replace this object with your own Firebase config.
  More info here : https://support.google.com/firebase/answer/7015592?hl=en#web&zippy=%2Cin-this-article 
*/
const firebaseConfig = {
  apiKey: 'AIzaSyAc1Sg0X9jiRkMFoLJRf2UikSMFmhDqKlc',
  authDomain: 'photo-266af.firebaseapp.com',
  projectId: 'photo-266af',
  storageBucket: 'photo-266af.appspot.com',
  messagingSenderId: '1046780773629',
  appId: '1:1046780773629:web:1c85fe7d58af1d6735ea94',
  measurementId: 'G-BQSDJB7P4S',
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
signInAnonymously(auth)
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.error(e);
  });
export default storage;
