import React from "react";
import { ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Board = ({ G }) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../Table/scrumplay-camenbert.jpg")}
      style={{
        position: "absolute",
        width: "1280px",
        height: "720px",
        top: Math.max(insets.top, 950),
        left: Math.max(insets.left, 650),
      }}
    ></ImageBackground>
  );
};

export default Board;
