import React from "react";
import { ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Board = ({ G }) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../Table/plateau.png")}
      style={{
        position: "absolute",
        width: "1280px",
        height: "750px",
        top: Math.max(insets.top, 900),
        left: Math.max(insets.left, 550),
      }}
    ></ImageBackground>
  );
};

export default Board;
