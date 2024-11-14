import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import InvitationFormModal from "@/components/modals/InvitationFormModal";
// Importiere hier weitere benötigte Komponenten

const Feed = ({ currentMode, modalVisible, setModalVisible }) => {
  return (
    <ThemedView>
      {/* Dein bestehender Code für den Feed */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Send an invitation</Text>
      </TouchableOpacity>
      {/* Modal für Einladungen */}
      <InvitationFormModal modalVisible={modalVisible} />
    </ThemedView>
  );
};

export default Feed;
