import React from "react";
import { Stack } from "expo-router";

export default function MainLayout() {
  console.log("called ----> main");

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  );
}
