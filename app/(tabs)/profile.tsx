import React, {useState, useEffect} from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { View, Text, Image, StyleSheet, Modal, TextInput, Button} from "react-native";

import { Mode } from "@/constants/Colors";
import useCurrentMode from "@/custom_hooks/useCurrentMode";
import CustomButton from "@/components/CustomButton";
import { FontAwesome } from "@expo/vector-icons";
import ChangePasswordModal from '../../components/modals/ChangePasswordModal'
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { auth } from '@/firebaseConfig';
//COMPONENTS
import Login from "@/components/HomeScreenIndex/Login";
//CUSTOM HOOKS
import useProfileForm from '../../custom_hooks/useProfileForm'


const Profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  //const userLoggedIn = useSelector((state) => state);
  const { currentMode, setCurrentMode } = useCurrentMode();
  const [modalVisible, setModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const currentUser = useSelector((state) => state.auth.user);
  const { handleInputChange, submitChangedInputs } = useProfileForm()

  const [currentField, setCurrentField] = useState("");

  const openModal = (field) => {
    setCurrentField(field);add 
    setModalVisible(true);
  };

  
  console.log('current user at profile')
  console.log(currentUser)


  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      console.log("Passwort geändert:", newPassword);
      // Hier kannst du die Logik zum Speichern des neuen Passworts hinzufügen
      setModalVisible(false); // Schließe das Modal nach dem Ändern
    } else {
      alert("Die Passwörter stimmen nicht überein.");
    }
  };

  useEffect(()=>{
    if(currentUser.id != null){
      console.log('HI')
    }
  }, [currentUser])




  const dynamicStyles = {
    friendsContainer: {
      backgroundColor: Mode[currentMode].background_secondary,
      height: 110,
      overflow: "scroll",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 2,
      borderTopWidth: 2,
      borderTopColor: Mode[currentMode].border_color,
      borderBottomColor: Mode[currentMode].border_color,
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
  };


  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Mode[currentMode].background_primary },
      ]}
    >
      {isLoggedIn ? (
        <View>
          <Text
            style={[styles.title, { color: Mode[currentMode].font_primary }]}
          >
            Profile
          </Text>

          <View style={styles.userDataDiv}>
            <TextInput
              placeholder={`Name: ${currentUser.data.displayName}`}
              value={currentUser.data.displayName}
              onChangeText={(value) => handleInputChange("name")}
              style={[
                styles.userDataSubDiv,
                { backgroundColor: Mode[currentMode].background_secondary },
                { color: Mode[currentMode].font_primary },
              ]}
            />

            <CustomButton
              title="change your name"
              onPress={() => handleInputChange("name")}
            />

            <TextInput
              placeholder={`E-Mail: ${currentUser.data.email}`}
              value={currentUser.data.displayName}
              onChangeText={(value) => handleInputChange("email")}
              style={[
                styles.userDataSubDiv,
                { backgroundColor: Mode[currentMode].background_secondary },
                { color: Mode[currentMode].font_primary },
              ]}
            />
             
            <CustomButton
              title="change your email"
              onPress={() => handleInputChange("email")}
            />
            <View style={styles.passwordDiv}>
              <Text
                style={[
                  styles.userDataSubDiv,
                  { backgroundColor: Mode[currentMode].background_secondary },
                  { color: Mode[currentMode].font_primary },
                ]}
              >
                Password: *********
              </Text>
              <CustomButton
                title="Change Password"
                onPress={() => setModalVisible(true)}
              />
            </View>

            <Text style={styles.userImage}> *user image* </Text>
          </View>

          <View style={styles.invitationsDataDiv}>
            <View
              style={[
                styles.invitationsDataSubDiv,
                { backgroundColor: Mode[currentMode].background_secondary },
              ]}
            >
              <Text
                style={[
                  styles.subTitle,
                  { color: Mode[currentMode].font_primary },
                ]}
              >
                your friends
              </Text>
              <View style={dynamicStyles.friendsContainer}>
                <View style={dynamicStyles.friendItem}></View>
                <View style={dynamicStyles.friendItem}></View>
                <View style={dynamicStyles.friendItem}></View>
                <View style={dynamicStyles.friendItem}></View>
                <View style={dynamicStyles.friendItem}></View>
                <View style={dynamicStyles.friendItem}></View>
              </View>
            </View>
            <View
              style={[
                styles.invitationsDataSubDiv,
                { backgroundColor: Mode[currentMode].background_secondary },
              ]}
            >
              <Text
                style={[
                  styles.subTitle,
                  { color: Mode[currentMode].font_primary },
                ]}
              >
                open your received invitations
                <FontAwesome
                  name="envelope"
                  size={24}
                  color={Mode[currentMode].font_primary}
                  style={{ marginHorizontal: 10 }}
                />
              </Text>
            </View>
            <View
              style={[
                styles.invitationsDataSubDiv,
                { backgroundColor: Mode[currentMode].background_secondary },
              ]}
            >
              <Text
                style={[
                  styles.subTitle,
                  { color: Mode[currentMode].font_primary },
                ]}
              >
                open your sent invitations
                <FontAwesome
                  name="paper-plane"
                  size={24}
                  color={Mode[currentMode].font_primary}
                  style={{ marginHorizontal: 10 }}
                />
              </Text>
            </View>
          </View>

          {/* change password-modal */}

          <ChangePasswordModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            currentMode={currentMode}
          />
        </View>
      ) : (
        <Login />
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },

  title: {
    fontSize: 24,
    margin: 20,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    padding: 5,
  },
  userDataDiv: {
    marginVertical: 5,
    position: "relative",
    minHeight: 120,
  },
  userDataSubDiv: {
    minHeight: 50,
    margin: 2,
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  passwordDiv: {},
  userImage: {
    position: "absolute",
    right: 2,
    top: -75,
    width: 70,
    height: 70,
    backgroundColor: "beige",
    textAlign: "center",
    fontSize: 12,
  },
  invitationsDataDiv: {
    minHeight: 400,
    marginVertical: 5,
  },
  invitationsDataSubDiv: {
    minHeight: "10%",
    marginVertical: 2,
  },
});