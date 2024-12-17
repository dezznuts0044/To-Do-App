import React, { useRef, useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import NextButton from "@/componets/nextButton";

export default function OnBoarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const router = useRouter();

  const ONBOARDING_DATA = [
    {
      id: 1,
      image: require("@/assets/animation/OnBoardingAnimation1.json"),
      description1: "Your convenience in \nmaking a todo list",
      description2:
        "Here's a mobile platform that helps you create task or to list so that it can help you in every job easier and faster.",
    },
    {
      id: 2,
      image: require("@/assets/animation/OnBoardingAnimation2.json"),
      description1: "Find the practicality in \nmaking your todo list",
      description2:
        "Easy-to-understand user interface  that makes you more comfortable when you want to create a task or to do list, Todyapp can also improve productivity",
    },
  ];

  const handleContinue = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    } else {
      router.push("/(auth)/createAccount"); // Replace "signin" with your desired route
    }
  };

  const handleSkip = () => {
    router.push("/(auth)/createAccount"); // Navigate to the Sign In screen directly
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <LottieView
        hardwareAccelerationAndroid
        autoPlay
        loop
        style={styles.lottieStyle}
        source={item.image}
      />
      <Text style={styles.desc1}>{item.description1}</Text>
      <Text style={styles.desc2}>{item.description2}</Text>
    </View>
  );

  return (
    <View style={styles.safeview}>
      {/* Skip Button */}
      <View style={{ alignItems: "flex-end", padding: 25 }}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Onboarding Animations */}
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(index);
        }}
      />

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <NextButton onPress={handleContinue} title="Continue" />
      </View>
    </View>
  );
}
