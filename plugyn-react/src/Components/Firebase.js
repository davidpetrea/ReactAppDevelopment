import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBSZuA5pEUSYpYQPOYChklipyV8Z-damjw",
    authDomain: "plugynstore-d1a0a.firebaseapp.com",
    databaseURL: "https://plugynstore-d1a0a.firebaseio.com",
    projectId: "plugynstore-d1a0a",
    storageBucket: "plugynstore-d1a0a.appspot.com",
    messagingSenderId: "70022536769",
    appId: "1:70022536769:web:b88580be2b7d528047f0c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;