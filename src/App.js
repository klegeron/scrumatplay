import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Client } from "boardgame.io/react-native";
import { colors } from "./constants/colors";

import Matchimals from "./ScrumAtPlay";
import game from "./ScrumAtPlay/game";
import { PlayerProvider } from "./hooks/players";

class App extends Component {
  state = {
    isMainMenuVisible: true,
    numPlayers: 1,
  };

  backToMainMenu = () => {
    this.setState({
      isMainMenuVisible: true,
    });
  };

  startGame = (numPlayers) => {
    this.setState({
      numPlayers,
      isMainMenuVisible: false,
    });
  };

  render() {
    const { numPlayers } = this.state;
    const MatchimalsClient = Client({
      board: Matchimals,
      game,
      numPlayers,
      debug: false,
    });

    return (
      <SafeAreaProvider>
        <PlayerProvider>
          <View style={styles.root}>
            <StatusBar hidden />
            <MatchimalsClient backToMainMenu={this.backToMainMenu} />
          </View>
        </PlayerProvider>
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
