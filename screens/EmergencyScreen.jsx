import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const EmergencyScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>EmergencyScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EmergencyScreen;
