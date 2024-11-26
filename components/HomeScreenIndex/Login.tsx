import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
//CUSTOM HOOKS
import useAuth from '../../custom_hooks/useAuth'
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "@/store/authReducer";
import { ThemedText } from "../ThemedText";
import { setUser, setIsRegistered } from "@/store/authReducer";

//COMPONENTS
import LoadingOverlay from "../ui/LoadingOverlay";


const Login = () => {

  const [userData, setUserData] = useState({
    type: "signIn",
    email: null,
    password: null,
  })
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState({
    error: null,
    success: null,
  })

  const handleInputChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };
 
  //const [errorMessage, setErrorMessage] = useState("");
  const { handleLogin, errorMessage } = useAuth();
  const isRegistered = useSelector((state) => state.auth.isRegistered);

  console.log(isRegistered)

  const auth = useSelector((state) => state.auth)
  console.log(auth)


  const dispatch = useDispatch();

  const loginHandler = async () => {
    setIsLoading(true)
    const response = await handleLogin(userData)

    /*
    if(response){
      const { localId, email, loginexpiresIn } = response; // Destrukturiere die Rückgabe

      dispatch(setUser({ id: localId, email, loginexpiresIn }));

      
      setMessages({ success: null, success: "login successfully" });
      setIsLoading(false);
      dispatch(setLogin());
    }*/
    if (response) {
      console.log("response @ useAuth.js");
      console.log(response);
      dispatch(setUser(response));

      setMessages({ success: null, success: "login successfully" });
      setIsLoading(false);
      dispatch(setLogin());
      return response.data; // Rückgabe der gesamten Response-Daten
    } else {
      //console.log('couldnt log in')
      setMessages({
        success: null,
        error:
          "login failed - check your entries, or click “sign up” to register",
      });
      setIsLoading(false);
    }
  
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  const registerHandler = () =>{
    dispatch(setIsRegistered(false))

  }


  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}> sign in </ThemedText>
      {isLoading && <LoadingOverlay />}
      {!isLoading && (
        <View style={styles.container}>
          <TextInput
            placeholder="E-Mail"
            value={userData.email}
            onChangeText={(value) => handleInputChange("email", value)}
            style={styles.input}
          />
          <TextInput
            placeholder="Passwort"
            value={userData.password}
            onChangeText={(value) => handleInputChange("password", value)}
            secureTextEntry
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Login "
              onPress={loginHandler}
              style={styles.button}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Text style={{ marginVertical: 5 }}> not yet registered? </Text>
            <Button
              title="sign up "
              onPress={registerHandler}
              style={styles.button}
            />
          </View>

          {errorMessage ? <Text>{errorMessage}</Text> : null}
          {messages.success && (
            <Text style={styles.successMessage}>{messages.success} </Text>
          )}
          {messages.error && (
            <Text style={styles.errorMessage}>{messages.error} </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: "700px",
    height: "400px",
    padding: 5,
  },
  title: {
    fontSize: "2rem",
    marginVertical: 10,
    textAlign: "center",
  },
  input: {
    border: "2px solid rgba(255,255,255, 0.5)",
    height: "15%",
    marginVertical: 10,
    padding: 5,
  },
  buttonContainer: {
    marginVertical: 7,
  },
  successMessage: {
    color: "lightgreen",
    fontSize: "1.1rem",
    marginVertical: 5,
  },
  errorMessage: {
    color: "darkred",
    fontSize: "1.1rem",
    marginVertical: 5,
  },
});
