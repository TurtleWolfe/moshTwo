import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import colors from "../config/colors";
import defaultStyles from '../app/constants/styles';

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          // color={colors.white}
          color={defaultStyles.palette.lightGrey}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: colors.primary,
    backgroundColor: defaultStyles.palette.primary,
    // borderColor: colors.white,
    borderColor: defaultStyles.palette.lightGrey,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default NewListingButton;
