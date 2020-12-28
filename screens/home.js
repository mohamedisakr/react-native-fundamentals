import React, { useState, useCallback, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import PalettePreview from "../components/palette-preview";
// import { COLOR_PALETTES } from "../data/colors";
// import { getColors } from "../services/color-api";
// const { getColors } = require("../services/color-api");

const Home = ({ navigation }) => {
  const [thePalettes, setThePalettes] = useState([]);
  const [url, setUrl] = useState(
    "https://color-palette-api.kadikraman.now.sh/palettes"
  );
  const handleFetchColors = useCallback(async () => {
    const result = await fetch(url);
    const thePalettes = await result.json();
    if (result.ok) {
      setThePalettes(thePalettes);
    }

    // setThePalettes(getColors());
  });

  useEffect(() => {
    handleFetchColors();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={thePalettes}
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
