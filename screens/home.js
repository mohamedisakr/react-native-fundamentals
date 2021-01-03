import React, { useState, useCallback, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import PalettePreview from "../components/palette-preview";
// import { COLOR_PALETTES } from "../data/colors";
// import { getColors } from "../services/color-api";
// const { getColors } = require("../services/color-api");

const Home = ({ navigation, route }) => {
  let newColorPalette = route.params ? route.params.newColorPalette : undefined;
  const [thePalettes, setThePalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
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

  useEffect(() => {
    if (newColorPalette) {
      setThePalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchColors();
    setIsRefreshing(false);
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
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ColorPaletteModal");
          }}
        >
          <Text style={styles.buttonText}>Add Color Scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "teal",
    marginBottom: 10,
  },
});

export default Home;

// ListHeaderComponent={
//   <TouchableOpacity
//     onPress={() => {
//       navigation.navigate("ColorSchemeModal");
//     }}
//   >
//     <Text style={styles.text}>Add Color Scheme Modal</Text>
//   </TouchableOpacity>
// }
