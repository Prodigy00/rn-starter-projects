import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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

      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none" //for ios and android to disable native behaviour
        autoCorrect={false} //for ios and android to disable native behaviour
        value={password}
        onChangeText={pword => {
          setPassword(pword);
        }}
      />
      {password.length > 0 && password.length <= 5 ? (
        <Text style={styles.passInput}>
          Password must be longer than 5 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  },
  passInput: {
    color: "red"
  }
});

export default TextScreen;
