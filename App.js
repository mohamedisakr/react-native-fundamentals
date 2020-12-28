import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import ColorBox from "./components/color-box";
import { COLORS } from "./data/colors";

const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={COLORS}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
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

export default App;
