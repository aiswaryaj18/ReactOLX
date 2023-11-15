import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_NLPmbU748HYp3xEbt0LzDKO9H4OIbqA",
  authDomain: "react-olx-87389.firebaseapp.com",
  projectId: "react-olx-87389",
  storageBucket: "react-olx-87389.appspot.com",
  messagingSenderId: "243102544242",
  appId: "1:243102544242:web:305c5e87264a3718b6adeb",
  measurementId: "G-QQFLH9R2VS"
};
  export default  firebase.initializeApp(firebaseConfig)