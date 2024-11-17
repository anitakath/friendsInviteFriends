import { Image, StyleSheet, Platform, Modal, TextInput, TouchableOpacity, Text, View  } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState,} from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
//STYLES
import { Colors } from '@/constants/Colors';
import { Mode } from '@/constants/Colors';
import useCurrentMode from '../../custom_hooks/useCurrentMode'
//COMPONENTS
import Feed from '@/components/HomeScreenIndex/Feed';
import Login from '@/components/HomeScreenIndex/Login';
//REDUX
import { useDispatch, useSelector } from "react-redux";



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


  const { currentMode, toggleMode } = useCurrentMode();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const receivedInvitations = useSelector((state) => state.invitations.receivedInvitations);


 
  const onPressOpenInvitationForm = () => {
    setModalVisible(true);
  };

  const onPressChangeUserImage = () => {
    console.log("changing user image ...");
  };

  const handleInvitationSubmit = () => {

    console.log("Einladung gesendet:", invitationDetails);
    setModalVisible(false); 
  };


  return (
    <ParallaxScrollView
      headerBackgroundColor={Mode[currentMode].background_primary}
      headerImage={
          <Image
            source={require("@/assets/images/freestock.jpg")}
            style={styles.headerImg}
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

   
   
        {isLoggedIn ? (
          <Feed
            onPressOpenInvitationForm={onPressOpenInvitationForm}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
            invitationDetails={invitationDetails}
            setInvitationDetails={setInvitationDetails}
            handleInvitationSubmit={handleInvitationSubmit}
            toggleMode={toggleMode}
            currentMode={currentMode}
            onPressChangeUserImage={onPressChangeUserImage}
          />
        ) : (
          <Login />
        )}

     

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
  headerImg: {
    objectFit: "cover",
    width: "100%",
    height: 200,
    opacity: "50%",
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