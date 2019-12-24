import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourAdjuster from "./components/ColourAdjuster";

const COLOUR_INCREMENT = 15;

const reducer = (state, action) => {
  //   console.log(state.red, "red");
  switch (action.type) {
    case "change_red":
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      }
      return { ...state, red: state.red + action.payload };
    case "change_green":
      if (
        state.green + action.payload > 255 ||
        state.green + action.payload < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.payload };
    case "change_blue":
      if (
        state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
      ) {
        return state;
      }
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  //   console.log({ state });
  //   console.log({ red, green, blue });
  return (
    <View>
      <ColourAdjuster
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOUR_INCREMENT })
        }
        colour="Red"
      />
      <ColourAdjuster
        colour="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOUR_INCREMENT })
        }
      />
      <ColourAdjuster
        colour="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOUR_INCREMENT })
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
