import { StyleSheet } from "react-native";
import { Colors } from "@/utils/Colors";
import DeviceDimensions from "@/utils/DeviceDimensions";

const styles = StyleSheet.create({
  nextButtonContainer: {
    backgroundColor: Colors.primaryColor,
    width: DeviceDimensions.screenWidth - 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 56,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  nextButtonIconContainer: {
    backgroundColor: Colors.primaryColor,
    width: DeviceDimensions.screenWidth - 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    flexDirection: "row",
  },
  socialButtonIconContainer: {
    backgroundColor: Colors.lightGrey,
    width: (DeviceDimensions.screenWidth - 50) / 2,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    flexDirection: "row",
  },
  tinyLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: "contain",
  },
});
export default styles;
