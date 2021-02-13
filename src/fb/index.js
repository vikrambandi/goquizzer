import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBnY_VOrpp1CwAAoZgfTT4cJgNGwLsyqxk',
    authDomain: 'goquizzer.firebaseapp.com',
    projectId: 'goquizzer',
    storageBucket: 'goquizzer.appspot.com',
    messagingSenderId: '806674921013',
    appId: '1:806674921013:web:0edc1d57567a9d51be637c',
    measurementId: 'G-8HBL1GWK9H'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
