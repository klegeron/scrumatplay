import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Client } from "boardgame.io/react-native";
import { colors } from "./constants/colors";

import ScrumAtPlay from "./ScrumAtPlay";
import game from "./ScrumAtPlay/game";

class App extends Component {
  state = {
    isMainMenuVisible: true,
    numPlayers: 1,
  };

  startGame = (numPlayers) => {
    this.setState({
      numPlayers,
      isMainMenuVisible: false,
    });
  };

  render() {
    const { numPlayers } = this.state;
    const ScrumAtPlayClient = Client({
      board: ScrumAtPlay,
      game,
      numPlayers,
      debug: false,
    });

    return (
      <SafeAreaProvider>
        <View style={styles.root}>
          <ScrumAtPlayClient />
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%",
    height: Platform.OS === "web" ? "100vh" : "100%",
    overflow: "hidden",
    backgroundColor: colors.grayDark,
  },
});

export default App;
