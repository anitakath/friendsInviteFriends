import { Image, StyleSheet, Platform, Modal, TextInput, TouchableOpacity, Text  } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from 'react-native';
//CUSTOM COMPONENTS
import InvitationsField from '../../components/playground/InvitationsField'
import CustomButton from '@/components/CustomButton';
import InvitationFormModal from '@/components/modals/InvitationFormModal'
//STYLES
import { Colors } from '@/constants/Colors';
import { Mode } from '@/constants/Colors';
import { useRoute } from '@react-navigation/native';
import useCurrentMode from '../../custom_hooks/useCurrentMode'
//COMPONENTS
import Feed from '@/components/HomeScreenIndex/Feed';
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { auth } from '@/firebaseConfig';
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

  const { currentMode, setCurrentMode } = useCurrentMode();
  //console.log('Redux State:', useSelector((state) => state));
  //const userLoggedIn = useSelector((state) => state.auth.userLoggedIn);
  //const userLoggedIn = useSelector((state) => state);
  //console.log(userLoggedIn)

 
  const onPressOpenInvitationForm = () => {
    setModalVisible(true);
  };

  const onPressChangeUserImage = () => {
    console.log("changing user image ...");
  };

  const handleInvitationSubmit = () => {
    // Hier die Logik zum Senden der Einladung hinzufügen
    console.log("Einladung gesendet:", invitationDetails);
    setModalVisible(false); // Schließe das Modal nach dem Senden
  };


    const toggleMode = () => {
      const newMode = (currentMode + 1) % Mode.length;
      console.log(newMode)
      setCurrentMode(newMode);
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
      currentMode={currentMode}
    >
      <TouchableOpacity
        onPress={toggleMode}
        color={Mode[currentMode].button_primary}
        style={[
          styles.toggle_button,
          { backgroundColor: Mode[currentMode].button_primary },
        ]}
      >
        <Text style={styles.buttonText}>Toggle Mode</Text>
      </TouchableOpacity>

      <ThemedView
        style={[
          styles.titleContainer,
          { backgroundColor: Mode[currentMode].background_primary },
        ]}
      >
        <ThemedText
          type="title"
          style={{ color: Mode[currentMode].font_primary }}
        >
          Best Friends App
        </ThemedText>
        <HelloWave />
        <Button
          onPress={onPressOpenInvitationForm}
          title="send an invitation"
          color={Mode[currentMode].button_primary}
          accessibilityLabel="Learn more about this purple button"
        />

        {/* Button zum Wechseln des Modus */}
        <InvitationFormModal
          currentMode={currentMode}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          invitationDetails={invitationDetails}
          setInvitationDetails={setInvitationDetails}
          handleInvitationSubmit={handleInvitationSubmit}
        />
      </ThemedView>

      <ThemedView
        style={[
          styles.stepContainer,
          { backgroundColor: Mode[currentMode].background_primary },
        ]}
      >
        <ThemedView style={styles.playground}>
          <InvitationsField currentMode={currentMode} />
        </ThemedView>

        <ThemedView style={[styles.playgroundRight, {backgroundColor : Mode[currentMode].background_primary}]}>
          <ThemedText style={{ color: Mode[currentMode].font_primary }}>
            Hey, Petra!
          </ThemedText>
          <Image
            source={require("../../assets/images/dance.jpg")}
            style={styles.userImage}
          />
          <CustomButton
            onPress={onPressChangeUserImage}
            title={"edit your data.."}
            color={Mode[currentMode].button_primary}
            currentMode={currentMode}
          />

          <ThemedText style={{ color: Mode[currentMode].font_primary }}>
            hows your mood today? let your friends know...
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  toggle_button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
   
  },
  buttonText: {
    color: "black", 
    fontSize: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.custom.background_primary,
    padding: 4,
    paddingTop: 12,
    display: "flex",
    flexDirection: "column",
  },
  stepContainer: {
    marginBottom: 8,
    backgroundColor: Colors.custom.background_primary,
    padding: 4,
  },
  playground: {
    backgroundColor: Colors.custom.background_primary,
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
  },
  leftSidesDate: {
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  playgroundRight: {
    backgroundColor: Colors.custom.background_primary,
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


/*

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

  */