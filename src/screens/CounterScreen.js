import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const VALUE = 1;
const INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT";
const countReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(countReducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: INCREMENT, payload: VALUE })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: DECREMENT, payload: VALUE })}
      />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
