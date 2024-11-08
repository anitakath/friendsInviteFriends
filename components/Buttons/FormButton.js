import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function FormButton(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    margin: 4,
    width: 140,
    height: 50,
    backgroundColor: "#E88873",
  },
  text: {
    width: "100%",
    textAlign: "center",
    color: "beige",

    fontWeight: "bolder",
  },
});
