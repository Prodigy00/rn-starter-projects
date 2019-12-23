import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./components/ImageDetail";
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail imageName="Beach" />
      <ImageDetail imageName="Forrest" />
      <ImageDetail imageName="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
