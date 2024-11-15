// useAuth.js
import { useState } from "react";
import { auth } from "../firebaseConfig"; // Stelle sicher, dass der Pfad korrekt ist
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true; // Erfolgreich eingeloggt
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        // Wenn der Benutzer nicht gefunden wird, registriere ihn
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          return true; // Erfolgreich registriert und eingeloggt
        } catch (registerError) {
          setErrorMessage(registerError.message);
          return false; // Registrierung fehlgeschlagen
        }
      } else {
        setErrorMessage(error.message);
        return false; // Anmeldung fehlgeschlagen
      }
    }
  };

  return { handleLogin, errorMessage };
};

export default useAuth;
