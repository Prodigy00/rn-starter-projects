import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColourAdjuster = ({ colour, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{colour}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${colour}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${colour}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColourAdjuster;
