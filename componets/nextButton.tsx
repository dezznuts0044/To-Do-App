import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
const NextButton = ({ onPress, title = "Next" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.nextButtonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
