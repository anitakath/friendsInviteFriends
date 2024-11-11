import { Tabs } from "expo-router";
import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "react-native-vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#E88873",
          borderTopWidth: 0,
          height: 60,
          paddingVertical: 2,
        },
        tabBarLabelStyle: {
          color: "#484A47",
          position: "relative",
          bottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "PROFILE",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <MaterialIcons name="person" color={"#484A47"} size={25} />{" "}
    
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="sendInvitation"
        options={{
          title: "SEND AN INVITATION",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <MaterialIcons name="send" color={"#484A47"} size={25} />{" "}
  
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <MaterialIcons name="home" color={"#484A47"} size={25} />{" "}

            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#E88873",
  },
});
