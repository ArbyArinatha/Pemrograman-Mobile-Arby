import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBdMRvhJndeZZcf6SX36OK4Hlv1ZHrLQfo",
    authDomain: "gdogapp.firebaseapp.com",
    projectId: "gdogapp",
    storageBucket: "gdogapp.appspot.com",
    messagingSenderId: "864807782377",
    appId: "1:864807782377:web:ed4cca80c9ad5f08abad78",
    measurementId: "G-0RQQB82ZH5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default {
    firebase,db
}