import React, { useState } from "react";
import {
  SafeAreaView,
  Switch,
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { COLORS } from "../data/colors";

const ColorSchemeModal = () => {
  const [colors, setColors] = useState([]);
  return (
    <FlatList
      style={styles.list}
      data={COLORS}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ colorName }) => {
        <View>
          <Text style={styles.text}>{colorName}</Text>
          <Switch value={false} />
        </View>;
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 10,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 10,
    marginBottom: 5,
  },
});
export default ColorSchemeModal;
