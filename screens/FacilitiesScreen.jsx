import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const FacilitiesScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>FacilitiesScreen</Text>
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

export default FacilitiesScreen;
