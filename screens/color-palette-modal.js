import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Switch,
  FlatList,
} from "react-native";
import { COLORS } from "../data/colors";

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert("Please enter palette name");
    } else if (selectedColors.length < 3) {
      Alert.alert("Please add at least 3 colors");
    } else {
      const newColorPalette = { paletteName: name, colors: selectedColors };
      navigation.navigate("Home", { newColorPalette });
    }
  }, [name, selectedColors]);

  const handleValueChanged = (val, color) => {
    if (val === true) {
      setSelectedColors((colors) => [...colors, color]);
    } else {
      setSelectedColors((colors) =>
        colors.filter((selected) => color.colorName !== selected)
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of the palette</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Palette Name"
      />
      <FlatList
        data={COLORS}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ colorName }) => (
          <View style={styles.color}>
            <Text>{colorName}</Text>
            <Switch
              value={!!selectedColors.find((color) => color === colorName)}
              onValueChange={(selected) => {
                handleValueChanged(selected, colorName);
              }}
            />
          </View>
        )}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    height: 40,
    backgroundColor: "teal",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  name: {
    marginBottom: 10,
  },
  color: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export default ColorPaletteModal;
