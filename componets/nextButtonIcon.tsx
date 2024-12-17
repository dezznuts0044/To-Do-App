import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
const NextButtonIcon = ({ onPress, title = "Next" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.nextButtonIconContainer}>
      <Image
        style={styles.tinyLogo}
        source={require("@/assets/icons/Message.png")}
      />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NextButtonIcon;
