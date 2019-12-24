import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourAdjuster from "./components/ColourAdjuster";

const COLOUR_INCREMENT = 15;

const reducer = (state, action) => {
  //   console.log(state.red, "red");
  switch (action.colourToChange) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      return { ...state, red: state.red + action.amount };
    case "green":
      if (
        state.green + action.amount > 255 ||
        state.green + action.amount < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.amount };
    case "blue":
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
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
          dispatch({ colourToChange: "red", amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colourToChange: "red", amount: -1 * COLOUR_INCREMENT })
        }
        colour="Red"
      />
      <ColourAdjuster
        colour="Green"
        onIncrease={() =>
          dispatch({ colourToChange: "green", amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colourToChange: "green", amount: -1 * COLOUR_INCREMENT })
        }
      />
      <ColourAdjuster
        colour="Blue"
        onIncrease={() =>
          dispatch({ colourToChange: "blue", amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colourToChange: "blue", amount: -1 * COLOUR_INCREMENT })
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
