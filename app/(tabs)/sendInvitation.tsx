
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
    container: {
      height: "100%",
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      marginVertical: 2,
      color: Mode[currentMode].font_primary,
    },
    friendsContainer: {
      backgroundColor:
        Mode[currentMode].background_secondary || Colors.custom.ultraLightBlue,
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
    <ParallaxScrollView
      headerBackgroundColor={Mode[currentMode].background_primary}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={dynamicStyles.container}>
        <ThemedView
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 40,
            backgroundColor: Mode[currentMode].background_primary,
          }}
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

          <View style={styles.buttonContainer}>
            <FormButton
              title="send invitation 🫶🏼"
              onPress={handleInvitationSubmit}
              color={Mode[currentMode].button_primary}
            />
          </View>
        </ThemedView>
      </View>
    </ParallaxScrollView>
  );
};

export default SendInvitation;


const styles = StyleSheet.create({
  container: {
    height: "100%",
    border: `3px solid  ${Colors.custom.ultraDarkBlue}`,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 2,
    color: Colors.custom.primary_font,
  },
  friendsContainer: {
    backgroundColor: Colors.custom.ultraLightBlue,
    height: 110,
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderTopColor: Colors.custom.darkBlue,
    borderBottomColor: Colors.custom.darkBlue,
    marginVertical: 30,
    marginBottom: 40,
  },
  friendItem: {
    border: `1px solid ${Colors.custom.darkBlue}`,
    borderRadius: "50%",
    height: 70,
    width: 70,
    backgroundColor: Colors.custom.background_primary,
    margin: 6,
  },
  input: {
    height: 50,
    padding: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    borderBottomWidth: 2,
    color: Colors.custom.primary_font,
    borderBottomColor: Colors.custom.darkBlue,
  },
  inputFocused: {
    height: 50,
    padding: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    borderBottomWidth: 0,
    borderBottomColor: "transparent",
    backgroundColor: Colors.custom.ultraLightBlue,
    color: Colors.custom.darkBlue,
  },
  buttonContainer: {
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.custom.background_primary,
    justifyContent: "end",
  },
});
