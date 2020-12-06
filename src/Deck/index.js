import React, { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Button from "../Button";
import initialCardsAction from "./initialCardsAction";

function Deck() {
  const insets = useSafeAreaInsets();
  const [cardsAction, setCardsAction] = useState(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function generateCardsAction() {
    setCardsAction(initialCardsAction(getRandomInt(3)));
  }

  return (
    <View
      style={{
        position: "absolute",
        bottom: Math.max(insets.bottom, 16),
        left: Math.max(insets.left, 16),
      }}
    >
      {cardsAction && (
        <img
          id="cardAction"
          src={window.location.origin + cardsAction.path}
          alt={cardsAction.name}
          style={{
            position: "absolute",
            width: "227px",
            height: "315px",
            bottom: Math.max(insets.bottom, 80),
            zIndex: -1,
          }}
        />
      )}
      <Button onPress={() => generateCardsAction()}>Action</Button>
    </View>
  );
}

export default Deck;
