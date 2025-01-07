import React, { useRef, useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import NextButton from "@/componets/nextButton";
import { Colors } from "@/utils/Colors";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function OnBoarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const opacity = useSharedValue(0);

  // Function to animate button opacity
  useEffect(() => {
    if (currentIndex > 0) {
      opacity.value = withTiming(1, { duration: 1000 });
    } else {
      opacity.value = withTiming(0, { duration: 1000 });
    }
  }, [currentIndex]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const ONBOARDING_DATA = [
    {
      id: 1,
      image: require("@/assets/images/onBoadring/LogoOnboarding.png"),
      description1: "ToDoApp",
      description2: "The best to do list application for you",
      bgColor: Colors.primaryColor,
    },
    {
      id: 2,
      image: require("@/assets/images/onBoadring/OnboardingImage1.png"),
      description1: "Your convenience in \nmaking a todo list",
      description2:
        "Here's a mobile platform that helps you create task or to list so that it can help you in every job easier and faster.",
      bgColor: Colors.white,
    },
    {
      id: 3,
      image: require("@/assets/images/onBoadring/OnboardingImage2.png"),
      description1: "Find the practicality in \nmaking your todo list",
      description2:
        "Easy-to-understand user interface that makes you more comfortable when you want to create a task or to do list, Todyapp can also improve productivity",
      bgColor: Colors.white,
    },
  ];

  const backgroundColor = scrollX.interpolate({
    inputRange: ONBOARDING_DATA.map((_, i) => i * width),
    outputRange: ONBOARDING_DATA.map((item) => item.bgColor),
  });

  const handleContinue = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    } else {
      router.push("/(auth)/createAccount");
    }
  };

  const handleSkip = () => {
    router.push("/(auth)/createAccount");
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.onBoardingImage} source={item.image} />
      <View style={styles.desContainer}>
        <Text style={styles.desc1}>{item.description1}</Text>
        <Text style={styles.desc2}>{item.description2}</Text>
      </View>
    </View>
  );

  return (
    <Animated.View style={[styles.safeview, { backgroundColor }]}>
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={ONBOARDING_DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      {/* Conditionally Render Continue Button */}
      {currentIndex > 0 && (
        <Animated.View style={[styles.buttonContainer, animatedStyle]}>
          <NextButton onPress={handleContinue} title="Continue" />
        </Animated.View>
      )}
    </Animated.View>
  );
}
