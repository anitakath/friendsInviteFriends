import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import CustomButton from "../CustomButton";


const InvitationsField = () => {
  const [isInvited, setIsInvited] = useState(false); // Zustand für Einladungen

  const onPressOpenInvitationForm = () => {
    // Logik zum Öffnen des Einladungsformulars
    console.log("Einladungsformular öffnen");
  };

  const onPressSayYes = () =>{

  }

  const onPressSayNo= () =>{
      
  }

  const onPressSayMaybe = () => {

  };

  return (
    <ThemedView style={styles.playgroundLeft}>
      {!isInvited ? (
        <>
          <ThemedText style={styles.leftSidesTitle}>
            poledance date ?
          </ThemedText>
          <ThemedText style={styles.leftSidesDate}>
            06.November 2024, 17:00
          </ThemedText>
          <ThemedText style={styles.leftSidesLocation}>
            📍 Nordpole Bahrenfeld
          </ThemedText>
          <ThemedView style={styles.calendarButtonDiv}>
            <CustomButton
              onPress={onPressOpenInvitationForm}
              title={"add to calendar"}
            />
            <CustomButton onPress={onPressOpenInvitationForm} title={"..."} />
          </ThemedView>

          <ThemedView style={styles.invitationByContainer}>
            <Image
              source={require("../../assets/images/dance.jpg")}
              style={styles.userImage}
            />
            <ThemedText>invited by: Anne </ThemedText>
          </ThemedView>

          <ThemedView style={styles.playgroundMiddle}>
            <Image
              source={require("../../assets/images/dance.jpg")}
              style={styles.image}
            />
            <ThemedView style={styles.reactButtons}>
              <CustomButton title={"yess"} onPress={onPressSayYes} />
              <CustomButton title={"mayyybe"} onPress={onPressSayMaybe} />
              <CustomButton title={"naah"} onPress={onPressSayNo} />
            </ThemedView>

            <ThemedText>
              - wenn "Vielleicht" angeklickt, dann öffnet sich dein Modal mit
              einer Textarea (Modal), damit der Eingeladene eine Nachricht an
              den Einladenden senden kann
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
          />
        </>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  playgroundLeft: {
    backgroundColor: "#E0AC9D",
    width: "100%",
  },
  playgroundMiddle: {
    backgroundColor: "#E0AC9D",
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
  },
  leftSidesDate: {
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  leftSidesLocation: {
    height: 40,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarButtonDiv: {
    border: "wpx solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#E0AC9D",
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
    backgroundColor: "#E0AC9D",
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
    backgroundColor: "#E0AC9D",
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export default InvitationsField;
