import React from "react";
import { StyleSheet, View } from "react-native";

import Card from "../Card";

const Deck = ({ cards, onCardDrop, style, ...rest }) => (
  <View style={[styles.root, style]} {...rest}>
    {cards.map((card, i) => {
      return (
        <Card
          key={i}
          card={card}
          onCardDrop={onCardDrop}
          flipped={i === 0}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 100 - i,
          }}
          disabled={i !== 0}
        />
      );
    })}
  </View>
);

Deck.defaultProps = {
  cards: [],
};

const styles = StyleSheet.create({
  root: {
    position: "absolute",
  },
});

export default Deck;
