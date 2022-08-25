import { WIDTH } from "@/Theme/Dimension";
import { Colors, Fonts, mySize } from "@/Theme/MyFeatures";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appButtonContainer: {
    width: "100%",
    height: WIDTH / 7.5,
    elevation: 8,
    backgroundColor: Colors.buttonColor,
    borderRadius: 30,
    paddingVertical: WIDTH / 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  appButtonText: {
    fontSize: mySize.size27,
    color: Colors.white,
    textTransform: "uppercase",
    fontFamily: Fonts.medium,
    textAlign: "center",
  },

  transapentButton: {
    width: "100%",
    height: WIDTH / 8,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.buttonColor,
    borderRadius: 30,
    paddingVertical: WIDTH / 40,
    paddingHorizontal: 12,
  },
  tranparentButtonText: {
    fontSize: mySize.size27,
    color: Colors.buttonColor,
    fontFamily: Fonts.medium,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default styles;
