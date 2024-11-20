import React, { useState } from "react";
import { View, TextInput, StyleSheet, Modal, Button } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import FormButton from '../Buttons/FormButton'
import useCurrentMode from "@/custom_hooks/useCurrentMode";
import { Mode } from "@/constants/Colors";
import FriendsContainer from "../playground/FriendsContainer";


const InvitationFormModal = ({
  modalVisible,
  setModalVisible,
  handleInvitationSubmit,
  invitationDetails,
  setInvitationDetails,
}) => {
  const [focusedField, setFocusedField] = useState(null);
  const { currentMode, toggleMode } = useCurrentMode();


  console.log(currentMode)

  const dynamicStyles = {


  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <ThemedView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 40,
          backgroundColor: Mode[currentMode].background_primary,
        }}
      >
        <ThemedText style={styles.title}>
          {" "}
          who do you want to invite?{" "}
        </ThemedText>

        <FriendsContainer />

        <ThemedText style={styles.title}>
          {" "}
          what would you like to do when and where?{" "}
        </ThemedText>

        <TextInput
          placeholder="Titel"
          value={invitationDetails.title}
          onChangeText={(text) =>
            setInvitationDetails({ ...invitationDetails, title: text })
          }
          style={[
            styles.input,
            focusedField === "title" && styles.inputFocused,
            { borderBottomColor: Mode[currentMode].border_color }, // Verwende hier border_color aus dem Mode-Array
            { borderBottomWidth: 2 },
          ]}
          onFocus={() => setFocusedField("title")}
          onBlur={() => setFocusedField(null)}
        />
        <TextInput
          placeholder="Datum"
          value={invitationDetails.date}
          onChangeText={(text) =>
            setInvitationDetails({ ...invitationDetails, date: text })
          }
          style={[
            styles.input,
            focusedField === "date" && styles.inputFocused,
            { backgroundColor: focusedField === "location" ? Mode[currentMode].background_secondary : Mode[currentMode].background_primary }, // Dynamische Hintergrundfarbe
            { borderBottomColor: Mode[currentMode].border_color }, // Verwende hier border_color aus dem Mode-Array
            { borderBottomWidth: 2 },
          ]}
          onFocus={() => setFocusedField("date")}
          onBlur={() => setFocusedField(null)}
        />
        <TextInput
          placeholder="Uhrzeit"
          value={invitationDetails.time}
          onChangeText={(text) =>
            setInvitationDetails({ ...invitationDetails, time: text })
          }
          style={[
            styles.input,
            focusedField === "time" && styles.inputFocused,
            { borderBottomColor: Mode[currentMode].border_color }, // Verwende hier border_color aus dem Mode-Array
            { borderBottomWidth: 2 },
          ]}
          onFocus={() => setFocusedField("time")}
          onBlur={() => setFocusedField(null)}
        />
        <TextInput
          placeholder="Location"
          value={invitationDetails.location}
          onChangeText={(text) =>
            setInvitationDetails({ ...invitationDetails, location: text })
          }
          style={[
            styles.input,
            focusedField === "location" && styles.inputFocused,
            { borderBottomColor: Mode[currentMode].border_color }, // Verwende hier border_color aus dem Mode-Array
            { borderBottomWidth: 2 },
          ]}
          onFocus={() => setFocusedField("location")}
          onBlur={() => setFocusedField(null)}
        />

        <View style={styles.buttonContainer}>
          <FormButton title="cancel" onPress={() => setModalVisible(false)} />
          <FormButton
            title="send invitation 🫶🏼"
            onPress={handleInvitationSubmit}
          />
        </View>
      </ThemedView>
    </Modal>
  );
};

export default InvitationFormModal;

const styles = StyleSheet.create({
  title:{
    fontSize: 24,
    textAlign: "center",
    marginVertical: 2,
  
  },
  input: {
    height: 50,
    padding: 2,
    marginHorizontal: 5,
    marginVertical: 10,

  },
  inputFocused: {
    height: 50,
    padding: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    borderBottomWidth: 0,
    borderBottomColor: "transparent",

  },
  buttonContainer: {
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E0AC9D",
    justifyContent: "end",
  },
});
