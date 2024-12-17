import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4CAF50"
          translucent={true}
        />
        <Stack.Screen name="onBoarding" />
        <Stack.Screen name="createAccount" />
      </Stack>
    </SafeAreaView>
  );
}
