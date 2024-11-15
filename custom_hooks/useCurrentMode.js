
// useCurrentMode.js
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setColorScheme, toggleColorScheme } from "../store/toggleReducer";

const useCurrentMode = () => {
  const dispatch = useDispatch();
  const currentMode = useSelector((state) => state.toggle.colorScheme);

  const setCurrentMode = (mode) => {
    dispatch(setColorScheme(mode)); // Setze den Modus im Store
  };

  const toggleMode = () => {
    dispatch(toggleColorScheme()); // Verwende die Redux-Aktion zum Toggeln des Modus
  };

  return { currentMode, setCurrentMode, toggleMode }; // Füge toggleMode zur Rückgabe hinzu
};

export default useCurrentMode;