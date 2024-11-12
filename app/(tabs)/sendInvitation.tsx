
import React, { useState } from "react";
import { Image, View, TextInput, StyleSheet, Modal, Button } from "react-native";
import { Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import FormButton from "@/components/Buttons/FormButton";
//CUSTOM HOOKS
import useCurrentMode from "@/custom_hooks/useCurrentMode";
//CIMPONENTS
import InvitationFormModal from "@/components/modals/InvitationFormModal";
//STYLES
import { Colors } from "@/constants/Colors";
import { Mode } from "@/constants/Colors";
import ParallaxScrollView from "@/components/ParallaxScrollView";


const SendInvitation = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [invitationDetails, setInvitationDetails] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    image: null,
  });
  const [focusedField, setFocusedField] = useState(null);
  const { currentMode } = useCurrentMode();


 
  const onPressChangeUserImage = () => {
    console.log("changing user image ...");
  };

  const handleInvitationSubmit = () => {
    console.log("Einladung gesendet:", invitationDetails);
    
  };
  console.log(currentMode)
  console.log(Mode[currentMode])

  const dynamicStyles = {
    title: {
      fontSize: 24,
      margin: 20,
      color: Mode[currentMode].font_primary,
    },
    
    friendsContainer: {
      backgroundColor:
      Mode[currentMode].background_secondary,
      height: 110,
      overflow: "scroll",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 2,
      borderTopWidth: 2,
      borderTopColor: Mode[currentMode].border_color,
      borderBottomColor: Mode[currentMode].border_color,
      marginVertical: 30,
      marginBottom: 40,
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
    input: {
      height: 50,
      paddingHorizontal: 5,
      marginVertical: 10,
      borderBottomWidth: 2,
      color: Mode[currentMode].font_primary || Colors.custom.primary_font,
      borderBottomColor:
        Mode[currentMode].border_color || Colors.custom.darkBlue,
    },
    inputFocused: {
      height: 50,
      padding: 2,
      marginHorizontal: 5,
      marginVertical: 10,
      borderBottomWidth: 0,
      backgroundColor: Colors.custom.ultraLightBlue,
      color: Colors.custom.darkBlue,
    },
    buttonContainer: {
      marginVertical: 15,
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
    },
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Mode[currentMode].background_primary },
      ]}
    >
      <ThemedText style={dynamicStyles.title}>
        who do you want to invite?
      </ThemedText>

      <ThemedView style={dynamicStyles.friendsContainer}>
        <ThemedView style={styles.friendItem}></ThemedView>
        <ThemedView style={styles.friendItem}></ThemedView>
        <ThemedView style={styles.friendItem}></ThemedView>
        <ThemedView style={styles.friendItem}></ThemedView>
        <ThemedView style={styles.friendItem}></ThemedView>
        <ThemedView style={styles.friendItem}></ThemedView>
        <ThemedView style={styles.friendItem}></ThemedView>
        <ThemedView style={styles.friendItem}></ThemedView>
      </ThemedView>

      <ThemedText style={dynamicStyles.title}>
        what would you like to do when and where?
      </ThemedText>

      <View>
        <TextInput
          placeholder="Titel"
          value={invitationDetails.title}
          onChangeText={(text) =>
            setInvitationDetails({ ...invitationDetails, title: text })
          }
          style={[
            dynamicStyles.input,
            focusedField === "title" && dynamicStyles.inputFocused,
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
            dynamicStyles.input,
            focusedField === "date" && dynamicStyles.inputFocused,
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
            dynamicStyles.input,
            focusedField === "time" && dynamicStyles.inputFocused,
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
            dynamicStyles.input,
            focusedField === "location" && dynamicStyles.inputFocused,
          ]}
          onFocus={() => setFocusedField("location")}
          onBlur={() => setFocusedField(null)}
        />

        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: Mode[currentMode].background_primary },
          ]}
        >
          <FormButton
            title="send invitation 🫶🏼"
            onPress={handleInvitationSubmit}
            color={Mode[currentMode].button_primary}
          />
        </View>
      </View>
    </View>
  );
};

export default SendInvitation;


const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
  friendItem: {
    border: `1px solid ${Colors.custom.darkBlue}`,
    borderRadius: "50%",
    height: 70,
    width: 70,
    backgroundColor: Colors.custom.background_primary,
    margin: 6,
  },
  buttonContainer: {
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
  },
});
