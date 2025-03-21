import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const EspecialitiesScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>EspecialitiesScreen</Text>
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

export default EspecialitiesScreen;
