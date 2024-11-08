import { Image, StyleSheet, Platform, Modal, TextInput  } from 'react-native';
import React, {useState} from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from 'react-native';
//CUSTOM COMPONENTS
import InvitationsField from '../../components/playground/InvitationsField'
import CustomButton from '@/components/CustomButton';
import InvitationFormModal from '@/components/modals/InvitationFormModal'


export default function HomeScreen() {
   const [modalVisible, setModalVisible] = useState(false);
   const [selectedFriend, setSelectedFriend] = useState(null);
   const [invitationDetails, setInvitationDetails] = useState({
     title: "",
     date: "",
     time: "",
     location: "",
     image: null,
   });

  const onPressOpenInvitationForm = () => {
    setModalVisible(true);
  };

  const onPressChangeUserImage = () =>{
    console.log("changing user image ...");
  }

  const handleInvitationSubmit = () => {
    // Hier die Logik zum Senden der Einladung hinzufügen
    console.log("Einladung gesendet:", invitationDetails);
    setModalVisible(false); // Schließe das Modal nach dem Senden
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#E0AC9D", dark: "#E88873" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"> Best Friends App </ThemedText>
        <HelloWave />

        <Button
          onPress={onPressOpenInvitationForm}
          title="send an invitation"
          color="#A37774"
          accessibilityLabel="Learn more about this purple button"
        />

        <InvitationFormModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          invitationDetails={invitationDetails}
          setInvitationDetails={setInvitationDetails}
          handleInvitationSubmit={handleInvitationSubmit}
        />
    
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.playground}>
          <InvitationsField />
        </ThemedView>

        <ThemedView style={styles.playgroundRight}>
          <ThemedText> Hey, Petra! </ThemedText>
          <Image
            source={require("../../assets/images/dance.jpg")}
            style={styles.userImage}
          />
          <CustomButton
            onPress={onPressChangeUserImage}
            title={"edit your data.."}
          />

          <ThemedText>
            hows your mood today? let your friends know...
          </ThemedText>
        </ThemedView>

        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>
          directory. This will move the current
          <ThemedText type="defaultSemiBold">app</ThemedText> to
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#E0AC9D",
    padding: 4,
    paddingTop: 12,
    display: "flex",
    flexDirection: "column",
  },
  stepContainer: {
    marginBottom: 8,
    backgroundColor: "#E0AC9D",
    padding: 4,
  },
  playground: {
    backgroundColor: "#E0AC9D",
    height: 500,
    overflow: "scroll",
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

    border: "2px solid green",
  },
  leftSidesDate: {
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    border: "2px solid gold",
  },

  playgroundRight: {
    backgroundColor: "#E0AC9D",
    width: "100%",
    marginVertical: 10,
    display: "flex",
    alignItems: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  userImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    justifyContent: "center",
  },
});
