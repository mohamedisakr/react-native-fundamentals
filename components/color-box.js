import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[boxColor, styles.box]}>
      <Text style={styles.boxText}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default ColorBox;
