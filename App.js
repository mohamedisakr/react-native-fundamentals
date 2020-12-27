import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

// const list = [
//   { title: "Cyan #2aa198", color: "#2aa198" },
//   { title: "Blue #268bd2", color: "#268bd2" },
//   { title: "Magenta #d33682", color: "#d33682" },
//   { title: "Orange #cb4b16", color: "#cb4b16" },
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
        <View style={[styles.cyan, styles.box]}>
          <Text style={styles.boxText}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.blue, styles.box]}>
          <Text style={styles.boxText}>Blue #268bd2</Text>
        </View>
        <View style={[styles.magenta, styles.box]}>
          <Text style={styles.boxText}>Magenta #d33682</Text>
        </View>
        <View style={[styles.orange, styles.box]}>
          <Text style={styles.boxText}>Orange #cb4b16</Text>
        </View>
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
  box: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
  magenta: {
    backgroundColor: "#d33682",
  },
  orange: {
    backgroundColor: "#cb4b16",
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
