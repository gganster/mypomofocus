import firebase from "firebase";

const MODE = "PROD"; //[PROD, EMULATOR]
const EMULATOR_IP = "localhost";

var firebaseProdConfig = {
  apiKey: "AIzaSyD5kUhvsbyBn2R4HjZrOlpUN6Pa5LzWMP0",
  authDomain: "mypomofocus.firebaseapp.com",
  projectId: "mypomofocus",
  storageBucket: "mypomofocus.appspot.com",
  messagingSenderId: "700416623415",
  appId: "1:700416623415:web:ab3200879baa0baf4510b2"
};

if (MODE === "PROD") { //PROD
  console.log("firebase initialized in prod mode")
  firebase.initializeApp(firebaseProdConfig);
} else { //EMULATOR
  console.log("firebase initialized in emulator mode")
  firebase.initializeApp(firebaseProdConfig);
  firebase.auth().useEmulator(`http://${EMULATOR_IP}:9099/`);
  firebase.functions().useEmulator(`${EMULATOR_IP}`, 5001)
  firebase.database().useEmulator(`${EMULATOR_IP}`, 9000);
  firebase.firestore().useEmulator(`${EMULATOR_IP}`, 8080);
}

firebase.firestore().settings({ignoreUndefinedProperties: true});
