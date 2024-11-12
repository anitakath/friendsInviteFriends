import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import CustomButton from "../CustomButton";
import { Colors } from "@/constants/Colors";
import { Mode } from "@/constants/Colors";
import useCurrentMode from "@/custom_hooks/useCurrentMode";

const InvitationsField = ({currentMode}) => {
  const [isInvited, setIsInvited] = useState(false);
  //const { currentMode } = useCurrentMode();

  const onPressOpenInvitationForm = () => {
    console.log("Einladungsformular öffnen");
  };

  const onPressSayYes = () => {};
  const onPressSayNo = () => {};
  const onPressSayMaybe = () => {
    // Logik für das Öffnen des Modals
  };

  // Dynamische Styles basierend auf dem aktuellen Modus
  const dynamicStyles = {
    playgroundLeft: {
      backgroundColor:
        Mode[currentMode].background_primary,
    
      width: "100%",
    },
    playgroundMiddle: {
      backgroundColor:
        Mode[currentMode].background_primary,
      width: "100%",
    },
    leftSidesTitle: {
      height: 60,
      marginRight: 10,
      marginLeft: 10,
      fontSize: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "scroll",
      color: Mode[currentMode].font_primary,
    },
    leftSidesDate: {
      height: 50,
      marginRight: 10,
      marginLeft: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: Mode[currentMode].font_primary 
    },
    leftSidesLocation: {
      height: 40,
      marginRight: 10,
      marginLeft: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: Mode[currentMode].font_primary 
    },
    calendarButtonDiv: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: Mode[currentMode].background_primary,
      
    },
    image: {
      width: "100%",
      height: 400,
      marginVertical: 10,
      resizeMode: "cover",
    },
    userImage: {
      width: 50,
      height: 50,
      marginHorizontal: 10,
      justifyContent: "center",
    },
    invitationByContainer: {
      backgroundColor:
        Mode[currentMode].background_primary,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
    },
    reactButtons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: Mode[currentMode].background_primary,
      marginHorizontal: 10,
      marginBottom: 5,
    },
  };


  return (
    <ThemedView style={dynamicStyles.playgroundLeft}>
      {!isInvited ? (
        <>
          <ThemedText style={dynamicStyles.leftSidesTitle}>
            {" "}
            poledance date ?{" "}
          </ThemedText>
          <ThemedText style={dynamicStyles.leftSidesDate}>
            {" "}
            06.November 2024, 17:00{" "}
          </ThemedText>
          <ThemedText style={dynamicStyles.leftSidesLocation}>
            {" "}
            📍 Nordpole Bahrenfeld{" "}
          </ThemedText>
          <ThemedView style={dynamicStyles.calendarButtonDiv}>
            <CustomButton
              currentMode={currentMode}
              onPress={onPressOpenInvitationForm}
              title={"add to calendar"}
            />
            <CustomButton
              onPress={onPressOpenInvitationForm}
              title={"..."}
              currentMode={currentMode}
            />
          </ThemedView>
          <ThemedView style={dynamicStyles.invitationByContainer}>
            <Image
              source={require("../../assets/images/dance.jpg")}
              style={dynamicStyles.userImage}
            />
            <ThemedText>invited by: Anne </ThemedText>
          </ThemedView>
          <ThemedView style={dynamicStyles.playgroundMiddle}>
            <Image
              source={require("../../assets/images/dance.jpg")}
              style={dynamicStyles.image}
            />
            <ThemedView style={dynamicStyles.reactButtons}>
              <CustomButton
                title={"yess"}
                onPress={onPressSayYes}
                currentMode={currentMode}
              />
              <CustomButton
                title={"mayyybe"}
                onPress={onPressSayMaybe}
                currentMode={currentMode}
              />
              <CustomButton
                title={"naah"}
                onPress={onPressSayNo}
                currentMode={currentMode}
              />
            </ThemedView>
            <ThemedText>
              {" "}
              - wenn "Vielleicht" angeklickt, dann öffnet sich dein Modal mit
              einer Textarea (Modal), damit der Eingeladene eine Nachricht an
              den Einladenden senden kann{" "}
            </ThemedText>
          </ThemedView>
        </>
      ) : (
        <>
          <ThemedText>
            {" "}
            left side, wenn du keine Einladungen erhalten hast{" "}
          </ThemedText>
          <ThemedText> - DERZEIT KEINE EINLADUNGEN </ThemedText>
          <CustomButton
            onPress={() => console.log("Freunde einladen")}
            title={"Freunde einladen"}
            currentMode={currentMode}
          />
        </>
      )}
    </ThemedView>
  );
};

export default InvitationsField;
