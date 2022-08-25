import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../Assets/Styles";
import styles from "./styles";

const AppButton = ({
  onPress,
  title,
  loading,
  buttonStyle,
  textStyle,
  disable,
  transparentColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={[
        transparentColor ? styles.transapentButton : styles.appButtonContainer,
        { ...buttonStyle },
      ]}
    >
      <Text
        style={[
          transparentColor ? styles.tranparentButtonText : styles.appButtonText,
          { ...textStyle },
        ]}
      >
        {loading === true ? (
          <ActivityIndicator size="small" color={Colors.white} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
