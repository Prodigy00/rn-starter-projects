import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>OhWooow!!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
        style={styles.buttonSpacing}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
        style={styles.buttonSpacing}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Images")}
        style={styles.buttonSpacing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonSpacing: {
    margin: 15
  }
});

export default HomeScreen;
