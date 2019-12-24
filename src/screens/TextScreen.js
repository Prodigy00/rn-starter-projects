import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none" //for ios and android to disable native behaviour
        autoCorrect={false} //for ios and android to disable native behaviour
        value={name}
        onChangeText={text => {
          setName(text);
        }}
      />
      <Text>Your name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
