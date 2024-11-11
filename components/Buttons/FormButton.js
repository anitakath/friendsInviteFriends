import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import useCurrentMode from "@/custom_hooks/useCurrentMode";
import { Mode } from "@/constants/Colors";


export default function FormButton(props) {
  const { onPress, title } = props;
  const { currentMode } = useCurrentMode();

  console.log(currentMode);

  console.log(Mode[currentMode]);

  // Dynamische Styles basierend auf dem aktuellen Modus
  const dynamicStyles = {
    button: {
      alignItems: "center",
      justifyContent: "center",
      elevation: 3,
      margin: 4,
      width: 160,
      height: 40,
      backgroundColor:
        Mode[currentMode].button_primary || Colors.custom.primary_font, // Dynamische Hintergrundfarbe
    },
    text: {
      width: "100%",
      textAlign: "center",
      color: Mode[currentMode].font_primary || Colors.custom.darkBlue, // Dynamische Textfarbe
      letterSpacing: 1, // Verwende eine Zahl für letterSpacing
      fontWeight: "bold", // Verwende "bold" anstelle von "bolder"
    },
  };

  return (
    <Pressable style={dynamicStyles.button} onPress={onPress}>
      <Text style={dynamicStyles.text}>{title}</Text>
    </Pressable>
  );
}
