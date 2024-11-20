import { ThemedView } from "@/components/ThemedView";
import useCurrentMode from "@/custom_hooks/useCurrentMode";
import { Mode } from "@/constants/Colors";



import {
  Image,
  View,
  TextInput,
  StyleSheet,
  Modal,
  Button,
} from "react-native";

const FriendsContainer = () => {


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
