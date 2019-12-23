import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        imageName="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={7}
      />
      <ImageDetail
        imageName="Forrest"
        imageSource={require("../../assets/forest.jpg")}
        score={8}
      />
      <ImageDetail
        imageName="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
