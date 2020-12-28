import React, { useState, useCallback, useEffect } from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";
import PalettePreview from "../components/palette-preview";
// import { COLOR_PALETTES } from "../data/colors";
// import { getColors } from "../services/color-api";
// const { getColors } = require("../services/color-api");

const Home = ({ navigation }) => {
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
