import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, SetCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          SetCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          SetCounter(counter - 1);
        }}
      />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
