import React, {useEffect} from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Mode } from "@/constants/Colors";
import useCurrentMode from "@/custom_hooks/useCurrentMode";
export default function CustomButton(props) {
  const { onPress, title, currentMode } = props;


  const validCurrentMode =
    currentMode >= 0 && currentMode < Mode.length ? currentMode : 0;


  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: Mode[validCurrentMode].button_primary },
      ]} // Dynamische Hintergrundfarbe
      onPress={onPress}
    >
      <Text
        style={[styles.text, { color: Mode[validCurrentMode].font_primary }]}
      >
        {/* Dynamische Textfarbe */}
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    margin: 4,

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
