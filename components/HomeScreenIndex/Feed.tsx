import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import InvitationFormModal from "@/components/modals/InvitationFormModal";
import { Mode } from "@/constants/Colors";
import { Colors } from "@/constants/Colors";
import useCurrentMode from "@/custom_hooks/useCurrentMode";
//COMPONENTS
import ParallaxScrollView from "../ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "../CustomButton";
import InvitationsField from '../playground/InvitationsField'



const Feed = ({
  onPressOpenInvitationForm,
  modalVisible,
  setModalVisible,
  selectedFriend,
  setSelectedFriend,
  invitationDetails,
  setInvitationDetails,
  handleInvitationSubmit,
  onPressChangeUserImage,
}) => {
  const { currentMode, setCurrentMode } = useCurrentMode();

  return (
    <ParallaxScrollView>
      <CustomButton
        onPress={onPressOpenInvitationForm}
        title="send an invitation"
        color={Mode[currentMode].button_primary}
        accessibilityLabel="Learn more about this purple button"
      />

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

      <ThemedView
        style={[
          styles.stepContainer,
          { backgroundColor: Mode[currentMode].background_primary },
        ]}
      >
        <ThemedView style={styles.playground}>
          <InvitationsField currentMode={currentMode} />
        </ThemedView>

        <ThemedView
          style={[
            styles.playgroundRight,
            { backgroundColor: Mode[currentMode].background_primary },
          ]}
        >
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
};



const styles = StyleSheet.create({
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

export default Feed