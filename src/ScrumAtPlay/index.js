import React, { useCallback, useRef, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { cardHeight, cardWidth, columns } from "../constants/board";
import Deck from "../Deck";
import Nameplate from "../Nameplate";
import Table from "../Table";
import Menu from "../Menu";
import Victory from "../Victory";
import { isLegalMove } from "./game";
import Dices from "../Dices";

const Matchimals = ({ backToMainMenu, ctx, G, moves, ...rest }) => {
  const [showMenu, setShowMenu] = useState(false);
  const tableRef = useRef();
  const insets = useSafeAreaInsets();

  const onCardDrop = useCallback(
    (measurements) => {
      // Get the top left corner of the card in relation to the viewport
      const cardLeft = measurements.pageX;
      const cardTop = measurements.pageY;

      // Get the top left corner of the viewport in relation to the entire table
      const tableLeft = tableRef.current._previousLeft;
      const tableTop = tableRef.current._previousTop;

      // Calculate the total distance from the table's edge to the card's edge
      const distanceLeft = Math.abs(tableLeft - cardLeft);
      const distanceTop = Math.abs(tableTop - cardTop);

      // Calculate the total distance in "cells"
      const cellsFromLeft = Math.round(distanceLeft / cardWidth);
      const cellsFromTop = Math.round(distanceTop / cardHeight);

      // Calculate the target cell's id
      const targetCell = cellsFromTop * columns + cellsFromLeft;

      return new Promise((resolve) => {
        if (isLegalMove(G, ctx, targetCell)) {
          moves.placeCard(targetCell);
        }
        resolve();
      });
    },
    [G, ctx, moves]
  );

  return (
    <>
      <View style={styles.root}>
        <StatusBar hidden />
        <Table ref={tableRef} G={G} ctx={ctx} {...rest} />

        <Deck />
        <Dices />
      </View>
      {ctx.gameover ? (
        <Victory
          backToMainMenu={backToMainMenu}
          player={ctx.gameover}
          players={G.players}
        />
      ) : null}
      <Menu
        moves={moves}
        player={ctx.currentPlayer}
        backToMainMenu={backToMainMenu}
        scrollToCenter={() => tableRef?.current?.scrollToCenter()}
        isVisible={showMenu}
        hide={() => setShowMenu(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Matchimals;
