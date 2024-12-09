import React, { useState } from "react";
import AuthLayout from "../(auth)/_layout";
import MainLayout from "../(main)/_layout";
import { router } from "expo-router";

export default function NavigationIndex() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("supdddd");
  console.log(isLoggedIn);

  return isLoggedIn
    ? router.push("/(auth)/onBoarding")
    : router.push("/(auth)/onBoarding");
}
