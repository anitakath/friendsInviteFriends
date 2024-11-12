import React, {useState} from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { View, Text, Image, StyleSheet, Modal, TextInput, Button} from "react-native";

import { Mode } from "@/constants/Colors";
import useCurrentMode from "@/custom_hooks/useCurrentMode";
import CustomButton from "@/components/CustomButton";

const Profile = () => {

  const { currentMode, setCurrentMode } = useCurrentMode();

  console.log(currentMode)

  const [modalVisible, setModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      console.log("Passwort geändert:", newPassword);
      // Hier kannst du die Logik zum Speichern des neuen Passworts hinzufügen
      setModalVisible(false); // Schließe das Modal nach dem Ändern
    } else {
      alert("Die Passwörter stimmen nicht überein.");
    }
  };


  console.log(modalVisible)


  const dynamicStyles = {
    friendsContainer: {
      backgroundColor: Mode[currentMode].background_secondary,
      height: 110,
      overflow: "scroll",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 2,
      borderTopWidth: 2,
      borderTopColor: Mode[currentMode].border_color,
      borderBottomColor: Mode[currentMode].border_color,
    },
    friendItem: {
      borderWidth: 1,
      borderRadius: "50%",
      height: 70,
      width: 70,
      backgroundColor:
        Mode[currentMode].background_primary ||
        Colors.custom.background_primary,
      margin: 6,
    },
  };


  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Mode[currentMode].background_primary },
      ]}
    >
      <Text style={[styles.title, { color: Mode[currentMode].font_primary }]}>
        Profile
      </Text>

      <View style={styles.userDataDiv}>
        <Text
          style={[
            styles.userDataSubDiv,
            { backgroundColor: Mode[currentMode].background_secondary },
            { color: Mode[currentMode].font_primary },
          ]}
        >
          {" "}
          Name: Anne-Kathrin{" "}
        </Text>
        <Text
          style={[
            styles.userDataSubDiv,
            { backgroundColor: Mode[currentMode].background_secondary },
            { color: Mode[currentMode].font_primary },
          ]}
        >
          Email: wagner.annekathrin@gmx.de{" "}
        </Text>
        <View style={styles.passwordDiv}>
          <Text
            style={[
              styles.userDataSubDiv,
              { backgroundColor: Mode[currentMode].background_secondary },
              { color: Mode[currentMode].font_primary },
            ]}
          >
            Password: *********
          </Text>
          <CustomButton
            title="Change Password"
            onPress={() => setModalVisible(true)}
          />
        </View>

        <Text style={styles.userImage}> *user image* </Text>
      </View>

      <View style={styles.invitationsDataDiv}>
        <View
          style={[
            styles.invitationsDataSubDiv,
            { backgroundColor: Mode[currentMode].background_secondary },
          ]}
        >
          <Text
            style={[styles.subTitle, { color: Mode[currentMode].font_primary }]}
          >
            your friends
          </Text>
          <View style={dynamicStyles.friendsContainer}>
            <View style={dynamicStyles.friendItem}></View>
            <View style={dynamicStyles.friendItem}></View>
            <View style={dynamicStyles.friendItem}></View>
            <View style={dynamicStyles.friendItem}></View>
            <View style={dynamicStyles.friendItem}></View>
            <View style={dynamicStyles.friendItem}></View>
          </View>
        </View>
        <View
          style={[
            styles.invitationsDataSubDiv,
            { backgroundColor: Mode[currentMode].background_secondary },
          ]}
        >
          <Text
            style={[styles.subTitle, { color: Mode[currentMode].font_primary }]}
          >
            your received invitations{" "}
          </Text>
        </View>
        <View
          style={[
            styles.invitationsDataSubDiv,
            { backgroundColor: Mode[currentMode].background_secondary },
          ]}
        >
          <Text
            style={[styles.subTitle, { color: Mode[currentMode].font_primary }]}
          >
            your sent invitations{" "}
          </Text>
        </View>
      </View>

      {/* change password-modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={styles.modal}
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
              placeholder="Neues Passwort bestätigen"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={[styles.input, { color: Mode[currentMode].font_primary }]}
            />
            <CustomButton
              title="Passwort ändern"
              onPress={handleChangePassword}
            />
            <CustomButton
              title="Abbrechen"
              onPress={() => setModalVisible(false)}
              color="red"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },

  title: {
    fontSize: 24,
    margin: 20,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    padding: 5,
  },
  userDataDiv: {
    marginVertical: 5,
    position: "relative",
    minHeight: 120,
  },
  userDataSubDiv: {
    minHeight: 50,
    margin: 2,
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  passwordDiv: {},
  userImage: {
    position: "absolute",
    right: 2,
    top: -75,
    width: 70,
    height: 70,
    backgroundColor: "beige",
    textAlign: "center",
    fontSize: 12,
  },
  invitationsDataDiv: {
    minHeight: 400,
    marginVertical: 5,
  },
  invitationsDataSubDiv: {
    minHeight: "20%",
    marginVertical: 2,
  },

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