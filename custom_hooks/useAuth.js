
import { useState, useEffect } from "react";
import axios from 'axios'
import Sensitives from '../constants/Sensitive'

const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [logoutTimer, setLogoutTimer] = useState(0);
  //const API_KEY = process.env.API_KEY;
  const API_KEY = `${Sensitives.Auth.API_KEY}`;
  //const API_KEY = process.env.REACT_APP_API_KEY

 console.log('MFUINSIUBFNSOKL')
  console.log(API_KEY)

  const validateInputs = (userData) => {

    const messages = [];
    if(userData.type === "signUp"){

      //validating entered inputs to sign user up!
      const { name, email, password, password_confirmed } = userData;

      //check for html tags
      const containsHTMLTags = (str) => /<[^>]*>/.test(str);

      const nameIsValid = name.length > 3 && !containsHTMLTags(name);
      if (!nameIsValid) {
        messages.push(
          "The name must be longer than 3 characters and must not contain any HTML tags."
        );
      }
      const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
       if (!emailIsValid) {
         messages.push("The e-mail address is invalid.");
       }

      //const passwordIsValid = password.length > 6;
      const passwordIsValid =
        password.length > 6 &&
        /[A-Z]/.test(password) && // Mindestens ein Großbuchstabe
        /[a-z]/.test(password) && // Mindestens ein Kleinbuchstabe
        /[0-9]/.test(password) && // Mindestens eine Zahl
        /[!@#$%^&*(),.?":{}|<>]/.test(password); // Mindestens ein Sonderzeichen
      
      if (!passwordIsValid) {
        messages.push(
          "The password must be at least 7 characters long and contain at least one upper case letter, one lower case letter, one number and one special character."
        );
      }


      const passwordsAreEqual = password === password_confirmed;

      if (!passwordsAreEqual) {
        messages.push("The passwords do not match.");
      }

      if (messages.length > 0) {
        return { success: false, messages };
      }

      return { success: true, message: "Registration successful!" };

   
    } if(userData.type === "signIn"){

      //validating entered inputs to sign user in!

      const { email, password } = userData;

      if (!email || !password) {
        return {
          success: false,
          message: "E-Mail und Passwort müssen eingegeben werden.",
        };
      }

      return { success: true, message: "Anmeldung erfolgreich!" };

    }

  }


  const handleLogin = async (userData) => {
    const validationResult = validateInputs(userData);
    if (!validationResult.success) {
      //setErrorMessage(validationResult.messages.join(" "));
      return; // Stop execution if validation fails
    }

    const { email, password } = userData;
    try{
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          API_KEY,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );

      if(response){
        const localId = response.data.localId;
        const email = response.data.email;
        const loginexpiresIn = response.data.expiresIn


        console.log("response @ useAuth.js");
        console.log(response);

        return { localId, email, loginexpiresIn };
      }

      //return true;
    } catch(error){
      return null;
    };

  }


  const handleRegistration = async (userData) => {
    const validationResult = await  validateInputs(userData);
    const { name, email, password } = userData;
    
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          API_KEY,
        {
          name: name,
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
  
    } catch (error) {
      setErrorMessage(error.message);
    }
    return validationResult;
  };




  return { handleLogin, handleRegistration,  errorMessage };
};

export default useAuth;
