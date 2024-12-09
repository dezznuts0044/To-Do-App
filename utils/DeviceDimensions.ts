import { Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const heightRatio = screenHeight / 812;
const widthRatio = screenWidth / 375;

const DeviceDimensions = { screenWidth, screenHeight, heightRatio, widthRatio };

export default DeviceDimensions;
