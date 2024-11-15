// firebaseConfig.js
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importiere die Authentifizierungsfunktion

// Web-App Konfiguration
const firebaseConfigWeb = {
  message: "web",
  apiKey: "AIzaSyC5Su0tCb_qqrDpHkZfHBPUn4bPDW4pSMU",
  authDomain: "bestfriendsapp-2a1d4.firebaseapp.com",
  projectId: "bestfriendsapp-2a1d4",
  storageBucket: "bestfriendsapp-2a1d4.appspot.com",
  messagingSenderId: "399394376472",
  appId: "1:399394376472:web:6ca4f4282a2dc3f604ac6d",
  measurementId: "G-HRDRN458N9",
};

// iOS-App Konfiguration
const firebaseConfigIos = {
  message: "ios",
  apiKey: "AIzaSyC5Su0tCb_qqrDpHkZfHBPUn4bPDW4pSMU",
  authDomain: "bestfriendsapp.firebaseapp.com",
  projectId: "bestfriendsapp-2a1d4",
  storageBucket: "bestfriendsapp-2a1d4.appspot.com",
  messagingSenderId: "399394376472",
  appId: "1:399394376472:ios:07e9d0b60d6ec5ef04ac6d",
};

// Bestimme, welche Konfiguration verwendet werden soll
let firebaseConfig;
if (
  typeof window !== "undefined" &&
  window.navigator.userAgent.includes("Mobile")
) {
  // Wenn es sich um eine mobile App handelt (z.B. iOS)
  firebaseConfig = firebaseConfigIos;
} else {
  // Andernfalls verwende die Web-Konfiguration
  firebaseConfig = firebaseConfigWeb;
}

// Überprüfe, ob die Firebase-App bereits existiert
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  if (error.code === "app/duplicate-app") {
    // Wenn die App bereits existiert, hole die bestehende App
    app = getApp(); // Stelle sicher, dass du getApp importierst
  } else {
    throw error; // Werfe andere Fehler weiter
  }
}

const auth = getAuth(app); // Initialisiere die Authentifizierung

// Exportiere die App und Auth-Instanz
export { app, auth };


/*
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importiere die Authentifizierungsfunktion

// Web-App Konfiguration
const firebaseConfigWeb = {
    apiKey: "AIzaSyC5Su0tCb_qqrDpHkZfHBPUn4bPDW4pSMU",
    authDomain: "bestfriendsapp-2a1d4.firebaseapp.com",
    projectId: "bestfriendsapp-2a1d4",
    storageBucket: "bestfriendsapp-2a1d4.appspot.com",
    messagingSenderId: "399394376472",
    appId: "1:399394376472:web:6ca4f4282a2dc3f604ac6d",
    measurementId: "G-HRDRN458N9"
};

// iOS-App Konfiguration
const firebaseConfigIos = {
    apiKey: "AIzaSyC5Su0tCb_qqrDpHkZfHBPUn4bPDW4pSMU",
    authDomain: "bestfriendsapp.firebaseapp.com",
    projectId: "bestfriendsapp-2a1d4",
    storageBucket: "bestfriendsapp-2a1d4.appspot.com",
    messagingSenderId: "399394376472",
    appId: "1:399394376472:ios:07e9d0b60d6ec5ef04ac6d"
};

// Bestimme, welche Konfiguration verwendet werden soll
let firebaseConfig;
if (typeof window !== 'undefined' && window.navigator.userAgent.includes('Mobile')) {
    // Wenn es sich um eine mobile App handelt (z.B. iOS)
    firebaseConfig = firebaseConfigIos;
} else {
    // Andernfalls verwende die Web-Konfiguration
    firebaseConfig = firebaseConfigWeb;
}

// Initialisiere Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialisiere die Authentifizierung

// Exportiere die App und Auth-Instanz
export { app, auth, firebaseConfig };
*/
