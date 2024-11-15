import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
//import { auth } from "../../firebaseConfig"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
//CUSTOM HOOKS
import useAuth from '../../custom_hooks/useAuth'
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "@/store/authReducer";
import { firebaseConfig } from "../../firebaseConfig"; 
import { app, auth } from "../../firebaseConfig";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [errorMessage, setErrorMessage] = useState("");
  const { handleLogin, errorMessage } = useAuth();

 
 
  const dispatch= useDispatch();

  const testLogin = async() =>{
     const success = await handleLogin(email, password);
     if (success) {
       dispatch(setLogin());
     }

  }


  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E-Mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Passwort"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Einloggen" onPress={testLogin} style={styles.button} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: "400px",
    padding: 5,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  input:{
    border: "2px solid rgba(255,255,255, 0.5)",
    height: "15%",
    marginVertical: 10,
    padding: 5,
  },

})
