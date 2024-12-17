import { StyleSheet } from "react-native";
import DeviceDimensions from "@/utils/DeviceDimensions";
import { Colors } from "@/utils/Colors";

const styles = StyleSheet.create({
  safeview: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  itemContainer: {
    width: DeviceDimensions.screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  lottieStyle: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  buttonContainer: {
    alignContent: "center",
    bottom: 20,
    alignItems: "center",
  },
  flatListContainer: {
    flexGrow: 1,
  },
  desc1: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  desc2: {
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    paddingHorizontal: 15,
  },
  skipText: { color: Colors.primaryColor, fontWeight: "bold" },
  welcomeText: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  welcomeTextGrenn: {
    fontSize: 30,
    color: Colors.primaryColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  welcomeScreenTopView: { marginTop: 72 * DeviceDimensions.heightRatio },
  welcomeScreenImageView: {
    marginTop: 68,
    alignItems: "center",
  },
  onBoardingImage: {
    width: 375 * DeviceDimensions.widthRatio,
    height: 402 * DeviceDimensions.heightRatio,
    resizeMode: "contain",
  },
  orText: {
    fontSize: 12,
    color: Colors.grey,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 8,
  },
  orRowContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  socialRowContainer: {
    width: DeviceDimensions.screenWidth - 48,
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
  },
  orLine: { flex: 0.4, height: 1.5, backgroundColor: Colors.lightGrey },
});
export default styles;
