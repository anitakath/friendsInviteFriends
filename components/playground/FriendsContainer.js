import { ThemedView } from "@/components/ThemedView";
import useCurrentMode from "@/custom_hooks/useCurrentMode";
import { Mode } from "@/constants/Colors";
import { useState, useEffect } from "react";
import { db } from "@/config/firebase"; //firebase database
import { collection, getDocs } from "firebase/firestore"; 
//REDUX
import { useSelector, useDispatch } from "react-redux";
import {Image, View, TextInput, StyleSheet, Modal, Button} from "react-native";

const FriendsContainer = () => {

  const [friendsList, setFriendsList] = useState([]);
  const dispatch = useDispatch();
  const friendsReducer = useSelector((state) => state.friends)

  //console.log('FRIENDSREDUCER')
  //console.log(friendsReducer)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users"); // Ersetze 'users' durch den Namen deiner Sammlung
        const userSnapshot = await getDocs(usersCollection);
        const userList = userSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('OH YEEEEAH')

        console.log(userList)
        setFriendsList(userList); // Setze die Liste der Freunde mit den abgerufenen Benutzern
      } catch (error) {
        console.log('OH NOOOO')
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  //console.log('friendslist at friendscontainer')
  //console.log(friendsList)
  console.log('hallo')


  const {currentMode} = useCurrentMode()

    const styles = StyleSheet.create({
      friendsContainer: {
        backgroundColor: Mode[currentMode].background_primary,
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
        border: "1px solid #A37774",
        borderRadius: "50%",
        height: 70,
        width: 70,
        backgroundColor: Mode[currentMode].background_secondary,
        margin: 6,
      },
    });
  return (
    <ThemedView style={styles.friendsContainer}>
      <ThemedView style={styles.friendItem}></ThemedView>
      <ThemedView style={styles.friendItem}></ThemedView>
      <ThemedView style={styles.friendItem}></ThemedView>
      <ThemedView style={styles.friendItem}></ThemedView>
      <ThemedView style={styles.friendItem}></ThemedView>
      <ThemedView style={styles.friendItem}></ThemedView>
      <ThemedView style={styles.friendItem}></ThemedView>
      <ThemedView style={styles.friendItem}></ThemedView>
    </ThemedView>
  );
};

export default FriendsContainer;
