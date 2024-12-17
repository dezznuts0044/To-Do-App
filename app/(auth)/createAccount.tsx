import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import NextButtonIcon from "@/componets/nextButtonIcon";
import SocialLoginButton from "@/componets/socialLoginButton";

export default function createAccount() {
  return (
    <View style={styles.safeview}>
      <View style={styles.welcomeScreenTopView}>
        <Text style={styles.welcomeText}>
          Welcome To <Text style={styles.welcomeTextGrenn}>ToDoApp</Text>{" "}
        </Text>
      </View>
      <View style={styles.welcomeScreenImageView}>
        <Image
          style={styles.onBoardingImage}
          source={require("@/assets/images/OnboardingImage.png")}
        />
      </View>
      <View style={{ alignSelf: "center", alignItems: "center" }}>
        <NextButtonIcon onPress={undefined} title="Continue with email" />
        <View style={styles.orRowContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>or continue with</Text>
          <View style={styles.orLine} />
        </View>
        <View style={[styles.socialRowContainer]}>
          <SocialLoginButton
            onPress={undefined}
            title="Facebook"
            image={require("@/assets/icons/Facebook.png")}
          />
          <SocialLoginButton
            onPress={undefined}
            title="Google"
            image={require("@/assets/icons/Google.png")}
          />
        </View>
      </View>
    </View>
  );
}
