import { Image, StyleSheet, Platform, Modal, TextInput, TouchableOpacity, Text, View  } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from 'react';
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
import Register from '@/components/HomeScreenIndex/Register';
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setUser } from "@/store/authReducer";


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
  const currentUser = useSelector((state) => state.auth.user);
  const [isRegistered, setIsRegistered] = useState(true);
  const receivedInvitations = useSelector(
    (state) => state.invitations.receivedInvitations
  );
  const dispatch = useDispatch();
  

  console.log(currentUser)

  // The following code ensures that the user is automatically logged out again 
  // after 48 hours as soon as he logs in.
  /*
  useEffect(()=>{
    if (currentUser.loginexpiresIn && currentUser.loginexpiresIn > 0) {
      //log user out after 48 hours, so every second day
      const expiresInMilliseconds = 48 * 60 * 60 * 1000;
      const timerId = setTimeout(() => {
        console.log("Logging out due to expiration");
        dispatch(setLogout());
        dispatch(setUser({ id: null, email: null, loginexpiresIn: null}));
      }, expiresInMilliseconds);

      return () => clearTimeout(timerId);
    } else {
      console.log("No expiration time available");
    }

  }, [currentUser])
  */

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


  const handleLogout = () =>{
    if(currentUser.id != null){
      dispatch(setLogout());
      dispatch(setUser({ id: null, email: null, loginexpiresIn: null })); 
    }
  }

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
        <View>
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

          <TouchableOpacity
            onPress={handleLogout}
            color={Mode[currentMode].button_secondary}
            style={[
              styles.toggle_button,
              { backgroundColor: "lightgrey", margin: 10 },
            ]}
          >
            <Text style={styles.buttonText}> Logout 😔 </Text>
          </TouchableOpacity>
        </View>
      ) : isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Register setIsRegistered={setIsRegistered} />
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