import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OnBoarding from "./(auth)/onBoarding";
import Home from "./(main)/home";
const Index = () => {
  console.log("main");

  const isLoggedIn = false;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {isLoggedIn ? <Home /> : <OnBoarding />}
    </GestureHandlerRootView>
  );
};

export default Index;
