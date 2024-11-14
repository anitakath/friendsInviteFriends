import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { auth } from "../../firebaseConfig"; // Pfad anpassen
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(); // Callback zum Wechseln zur Feed-Komponente
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        // Wenn der Benutzer nicht gefunden wird, registriere ihn
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          onLogin(); // Callback zum Wechseln zur Feed-Komponente
        } catch (registerError) {
          setErrorMessage(registerError.message);
        }
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <View>
      <TextInput placeholder="E-Mail" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Passwort"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Einloggen" onPress={handleLogin} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default Login;
