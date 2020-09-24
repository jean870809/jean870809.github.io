/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting. */

// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBf2umL61BkqJufaBGKvwZsmd0wpLrmQAE",
  authDomain: "test-f3031.firebaseapp.com",
  databaseURL: "https://test-f3031.firebaseio.com",
  projectId: "test-f3031",
  storageBucket: "test-f3031.appspot.com",
  messagingSenderId: "763216745915",
  appId: "1:763216745915:web:8575892908486e73de609e",
  measurementId: "G-XNKKBEFSTR"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]