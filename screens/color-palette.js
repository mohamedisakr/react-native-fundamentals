import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import ColorBox from "../components/color-box";

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,

    backgroundColor: "white",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});

export default ColorPalette;
