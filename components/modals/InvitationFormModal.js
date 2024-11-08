import React, { useState } from "react";
import { View, TextInput, StyleSheet, Modal, Button } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import FormButton from '../Buttons/FormButton'


const InvitationFormModal = ({
  modalVisible,
  setModalVisible,
  handleInvitationSubmit,
  invitationDetails,
  setInvitationDetails,
}) => {
  const [focusedField, setFocusedField] = useState(null);

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
          backgroundColor: "#E0AC9D",
        }}
      >
        <ThemedText style={styles.title}> who do you want to invite? </ThemedText>

        <ThemedView style={styles.friendsContainer}>
          <ThemedView style={styles.friendItem}></ThemedView>
          <ThemedView style={styles.friendItem}></ThemedView>
          <ThemedView style={styles.friendItem}></ThemedView>
          <ThemedView style={styles.friendItem}></ThemedView>
          <ThemedView style={styles.friendItem}></ThemedView>
          <ThemedView style={styles.friendItem}></ThemedView>
          <ThemedView style={styles.friendItem}></ThemedView>
          <ThemedView style={styles.friendItem}></ThemedView>
        </ThemedView>

         <ThemedText style={styles.title}> what would you like to do when and where? </ThemedText>

        <TextInput
          placeholder="Titel"
          value={invitationDetails.title}
          onChangeText={(text) =>
            setInvitationDetails({ ...invitationDetails, title: text })
          }
          style={[
            styles.input,
            focusedField === "title" && styles.inputFocused,
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
          style={[styles.input, focusedField === "date" && styles.inputFocused]}
          onFocus={() => setFocusedField("date")}
          onBlur={() => setFocusedField(null)}
        />
        <TextInput
          placeholder="Uhrzeit"
          value={invitationDetails.time}
          onChangeText={(text) =>
            setInvitationDetails({ ...invitationDetails, time: text })
          }
          style={[styles.input, focusedField === "time" && styles.inputFocused]}
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
  friendsContainer: {
    backgroundColor: "#E0AC9D",
    height: 110,
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderTopColor: "#E88873",
    borderBottomColor: "#E88873",
    marginVertical: 30,
    marginBottom: 40,
  },
  friendItem: {
    border: "1px solid #A37774",
    borderRadius: "50%",
    height: 70,
    width: 70,
    backgroundColor: "#E88873",
    margin: 6,
  },
  input: {
    height: 50,
    padding: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#E88873",
  },
  inputFocused: {
    height: 50,
    padding: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    borderBottomWidth: 0,
    borderBottomColor: "transparent",
    backgroundColor: "#E88873",
  },
  buttonContainer: {
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E0AC9D",
    justifyContent: "end",
  },
});
