import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { COLOR_PALETTES } from "../data/colors";
import PalettePreview from "../components/palette-preview";

const Home = ({ navigation }) => {
  return (
    <FlatList
      style={styles.list}
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          colorPalette={item}
          handlePress={() => {
            navigation.navigate("ColorPalette", item);
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: "white",
  },
});

export default Home;
