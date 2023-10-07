// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const database = require("firebase/firestore");
const firebase = require("firebase");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpNO7HMuzQkWD_lyuT0vFLOo-vH3E37Is",
  authDomain: "photo-gallery-api-4ea19.firebaseapp.com",
  projectId: "photo-gallery-api-4ea19",
  storageBucket: "photo-gallery-api-4ea19.appspot.com",
  messagingSenderId: "313358627501",
  appId: "1:313358627501:web:08c913d2ad4ab84d5e8c24",
  measurementId: "G-WMV0D14PN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const user = database.collection("Users")
module.exports = user;