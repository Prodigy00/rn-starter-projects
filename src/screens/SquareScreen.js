import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourAdjuster from "./components/ColourAdjuster";

const COLOUR_INCREAMENT = 15;
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  console.log(red);

  const setColour = (colour, change) => {
    //change === +15, -15
    switch (colour) {
      case "red":
        if (red + change > 255 || red + change < 0) {
          return;
        } else {
          setRed(red + change);
        }
        return;
      case "blue":
        if (blue + change > 255 || blue + change < 0) {
          return;
        } else {
          setBlue(blue + change);
        }
        return;
      case "green":
        if (green + change > 255 || green + change < 0) {
          return;
        } else {
          setGreen(green + change);
        }
        return;

      default:
        break;
    }
  };

  return (
    <View>
      <ColourAdjuster
        onIncrease={() => setColour("red", COLOUR_INCREAMENT)}
        onDecrease={() => setColour("red", -1 * COLOUR_INCREAMENT)}
        colour="Red"
      />
      <ColourAdjuster
        colour="Blue"
        onIncrease={() => setColour("blue", COLOUR_INCREAMENT)}
        onDecrease={() => setClour("blue", -1 * COLOUR_INCREAMENT)}
      />
      <ColourAdjuster
        colour="Green"
        onIncrease={() => setColour("green", COLOUR_INCREAMENT)}
        onDecrease={() => setColour("green", -1 * COLOUR_INCREAMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
