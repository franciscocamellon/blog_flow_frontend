// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, SafeAreaView, Platform, StatusBar } from "react-native";

import { Appbar, FAB, useTheme, Avatar, Button, Card, Checkbox, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const theme = useTheme();
  return (
    //test
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.elevation.level2} />
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 7 }}>
          <Avatar.Image size={158} source={require("../assets/logo.png")} style={{ backgroundColor: "transparent" }} />
          <Text variant="displayLarge">{`Guia EB ${"\n"}Saude`}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text variant="bodyLarge">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam sequi culpa saepe tenetur. Eius officia,
            molestias quos consequatur sunt blanditiis deleniti rerum numquam odit aperiam fugiat quas qui nam porro.
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <Card style={{ width: 100, height: 150, backgroundColor: theme.colors.primary }}>
            <Card.Content style={{ alignItems: "center", justifyContent: "center" }}>
              <Avatar.Icon size={80} icon={(props) => <MaterialIcons name="personal-injury" size={64} {...props} />} />
            </Card.Content>
          </Card>
          <Card style={{ width: 100, height: 150, backgroundColor: theme.colors.primary }}>
            <Card.Content style={{ alignItems: "center", justifyContent: "center" }}>
              <Avatar.Icon size={80} icon={(props) => <MaterialIcons name="emergency" size={64} {...props} />} />
            </Card.Content>
          </Card>
          <Card style={{ width: 100, height: 150, backgroundColor: theme.colors.primary }}>
            <Card.Content style={{ alignItems: "center", justifyContent: "center" }}>
              <Avatar.Icon size={80} icon={(props) => <MaterialIcons name="local-hospital" size={64} {...props} />} />
            </Card.Content>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight / 2 : 0,
    margin: 15,
  },
});

export default HomeScreen;
