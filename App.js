import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ColorBox from "./components/color-box";

// const list = [
//   { colorName: "Cyan", hexCode: "#2aa198" },
//   { colorName: "Blue", hexCode: "#268bd2" },
//   { colorName: "Magenta", hexCode: "#d33682" },
//   { colorName: "Orange", hexCode: "#cb4b16" },
// ];

// const showColor = () => {
//   list.forEach(({ title, color }) => {
//     <Text style={{ color: `${color}` }}>`${title}`</Text>;
//   });
// };

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
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
    marginBottom: 10,
  },
});

export default App;
