import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  console.log("rootlayout");
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{ headerShown: false, statusBarBackgroundColor: "auto" }}
      ></Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
