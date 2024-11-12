import React, { useState } from "react";
import { View, Text, TextInput, Modal, StyleSheet } from "react-native";
import CustomButton from "@/components/CustomButton"; 
import { Mode } from "@/constants/Colors";

const ChangePasswordModal = ({ visible, onClose, currentMode }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      console.log("Passwort geändert:", newPassword);
      onClose(); 
    } else {
      alert("Die Passwörter stimmen nicht überein.");
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View
          style={[
            styles.modalContent,
            { backgroundColor: Mode[currentMode].background_primary },
          ]}
        >
          <Text>Neues Passwort eingeben:</Text>
          <TextInput
            placeholder="Neues Passwort"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
            style={styles.input}
          />
          <TextInput
            placeholder="Passwort bestätigen"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
          />
          <CustomButton
            title="Passwort ändern"
            onPress={handleChangePassword}
          />
          <CustomButton title="Abbrechen" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", 
  },
  modalContent: {
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default ChangePasswordModal;
