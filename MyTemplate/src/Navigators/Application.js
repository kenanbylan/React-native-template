import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { navigationRef } from "./utils";
import Toast from "react-native-toast-message";
import Layout from "../Assets/Styles/Layout";
import FirstPage from "../View/FirstPage";

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={"dark-content"} />
        <SafeAreaView style={[Layout.fill, Layout.white]}></SafeAreaView>
        <Stack.Navigator
          initialRouteName="FirstPage"
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name="FirstPage" component={FirstPage} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

export default ApplicationNavigator;
