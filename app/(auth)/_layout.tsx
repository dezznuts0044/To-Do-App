import { Stack } from "expo-router";

export default function AuthLayout() {
  console.log("called---->  Auth ");

  return (
    <Stack>
      <Stack.Screen name="onBoarding" />
    </Stack>
  );
}
