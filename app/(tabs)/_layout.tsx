import { Tabs } from "expo-router";
import React, {useState, useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "react-native-vector-icons";
import { Mode } from "@/constants/Colors";
import useCurrentMode from "@/custom_hooks/useCurrentMode";


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { currentMode } = useCurrentMode();
  console.log('layout..')
  console.log(currentMode)


  useEffect(()=>{

    console.log('currentMode hat sich geändert:', currentMode);
    const renderLayout = (

    ) => {};
  }, [currentMode])

  

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(0,0,0,0.5)",
          borderTopWidth: 0,
          height: 60,
          paddingVertical: 2,
        },
        tabBarLabelStyle: {
          color: "beige",
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
              <MaterialIcons name="person" color={"beige"} size={25} />{" "}
    
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
              <MaterialIcons name="send" color={"beige"} size={25} />{" "}
  
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <MaterialIcons name="home" color={"beige"} size={25} />{" "}

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
 
  },
});
