import React, {useState, useEffect} from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { View, Text, Image, StyleSheet, Modal, TextInput, Button} from "react-native";
import { Mode } from "@/constants/Colors";
import useCurrentMode from "@/custom_hooks/useCurrentMode";
import CustomButton from "@/components/CustomButton";
import { FontAwesome } from "@expo/vector-icons";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/firebaseConfig";
//COMPONENTS
import Login from "@/components/HomeScreenIndex/Login";



const useProfileForm = () =>{


    const handleInputChange = (inputtype)=>{


        console.log(inputtype)


    }


    const submitChangedInputs = ()=>{

    }


    return {handleInputChange, submitChangedInputs}
}

export default useProfileForm