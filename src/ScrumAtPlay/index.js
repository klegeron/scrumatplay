import React, { useRef, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Deck from "../Deck";
import Table from "../Table";
import Menu from "../Menu";
import Victory from "../Victory";
import Dices from "../Dices";

const Matchimals = ({ backToMainMenu, ctx, G, moves, ...rest }) => {
  const [showMenu, setShowMenu] = useState(false);
  const tableRef = useRef();

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
