import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
const SocialLoginButton = ({ onPress, title, image }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.socialButtonIconContainer}
    >
      <Image style={styles.tinyLogo} source={image} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
