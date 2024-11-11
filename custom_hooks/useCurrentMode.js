
// useCurrentMode.js
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";

const useCurrentMode = () => {
  const [currentMode, setCurrentMode] = useState(0);

  const loadCurrentMode = async () => {
    try {
      const storedMode = await AsyncStorage.getItem("currentMode");
      if (storedMode !== null) {
        setCurrentMode(JSON.parse(storedMode));
      }
    } catch (error) {
      console.error("Error loading mode from storage:", error);
    }
  };

  const saveCurrentMode = async (mode) => {
    try {
      await AsyncStorage.setItem("currentMode", JSON.stringify(mode));
    } catch (error) {
      console.error("Error saving mode to storage:", error);
    }
  };


    useFocusEffect(
      React.useCallback(() => {
        loadCurrentMode();
      }, [])
    );


  return { currentMode, setCurrentMode: (mode) => { setCurrentMode(mode); saveCurrentMode(mode); } };
};

export default useCurrentMode;