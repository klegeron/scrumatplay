import React, { useRef } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Deck from "../Deck";
import Table from "../Table";
import Dices from "../Dices";

const ScrumAtPlay = ({ backToMainMenu, ctx, G, moves, ...rest }) => {
  const tableRef = useRef();

  return (
    <>
      <View style={styles.root}>
        <StatusBar hidden />
        <Table ref={tableRef} G={G} ctx={ctx} moves={moves} {...rest} />

        <Deck />
        <Dices />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default ScrumAtPlay;
