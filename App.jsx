import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider, adaptNavigationTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import FacilitiesScreen from "./screens/FacilitiesScreen";
import SpecialitiesScreen from "./screens/EspecialitiesScreen";
import EmergencyScreen from "./screens/EmergencyScreen";
import appTheme from "./theme/colors";
import { useState } from "react";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Para alternar tema no futuro
  const theme = isDarkTheme ? appTheme.dark : appTheme.light;
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Tab.Navigator
            initialRouteName="Home"
            // activeColor={customLightTheme.colors.tertiary}
            // barStyle={{ backgroundColor: "tomato" }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={26} />,
              }}
            />
            <Tab.Screen
              name="Emergency"
              component={EmergencyScreen}
              options={{
                tabBarLabel: "Emergency",
                tabBarIcon: ({ color }) => <MaterialIcons name="personal-injury" color={color} size={26} />,
              }}
            />
            <Tab.Screen
              name="Specialities"
              component={SpecialitiesScreen}
              options={{
                tabBarLabel: "Specialities",
                tabBarIcon: ({ color }) => <MaterialIcons name="emergency" color={color} size={26} />,
              }}
            />
            <Tab.Screen
              name="Facilities"
              component={FacilitiesScreen}
              options={{
                tabBarLabel: "Facilities",
                tabBarIcon: ({ color }) => <MaterialIcons name="local-hospital" color={color} size={26} />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
