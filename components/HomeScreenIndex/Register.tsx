import React, { useState, useEffect } from "react";
import { FlatList, View, TextInput, Button, Text, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
//CUSTOM HOOKS
import useAuth from "@/custom_hooks/useAuth";

const Register = ({ setIsRegistered }) => {
  const [userData, setUserData] = useState({
    type: "signUp",
    name: "",
    email: "",
    password: "",
    password_confirmed: "",
  });

  const handleInputChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const {handleRegistration} = useAuth()
  const [errorMessages, setErrorMessages] = useState([])
  const [successMessage, setSuccessMessage] = useState("")


  const handleSubmit = async () =>{
    console.log("submitting...");
    //handleRegistration(userData);

    // Call the registration function and get validation results
    const validationResult = await handleRegistration(userData);
    console.log(validationResult)
    
    if (!validationResult.success) {
      // Set error messages if validation fails
      setErrorMessages(validationResult.messages);
      setSuccessMessage("");
    } else if(validationResult.success){
      // Clear error messages on successful registration
      setErrorMessages([]);
      setSuccessMessage(validationResult.message)
   
    }
  }

  console.log('CHECKEN')

  console.log(errorMessages)
 
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Sign Up</ThemedText>
      <TextInput
        placeholder="Name"
        value={userData.name}
        onChangeText={(value) => handleInputChange("name", value)}
        style={styles.input}
      />
      <TextInput
        placeholder="E-Mail"
        value={userData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={userData.password}
        onChangeText={(value) => handleInputChange("password", value)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        value={userData.password_confirmed}
        onChangeText={(value) => handleInputChange("password_confirmed", value)}
        secureTextEntry
        style={styles.input}
      />

      {/* Render error messages as a list */}
      {errorMessages.length > 0 && (
        <View style={styles.errorContainer}>
          <FlatList
            data={errorMessages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={{ color: "purple", marginVertical: 5}}>💜  {item}</Text>
            )}
          />
        </View>
      )}

      {/* Render success message */}
      {successMessage && (
        <Text style={{ color: "lightgreen" }}>{successMessage}</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSubmit} />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={{ marginVertical: 10 }}> already registered? </Text>
        <Button title="Sign In Instead" onPress={() => setIsRegistered(true)} />
      </View>
    </View>
  );
};

export default Register

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "400px",
    maxHeight: "700px",
    padding: 5,
    backgroundColor: "rgba(255,255,255,0.2)",
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
});
