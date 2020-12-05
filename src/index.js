import { AppRegistry, Platform } from "react-native";

import App from "./App";

if (Platform.OS === "android") {
  require("babel-polyfill");
}

AppRegistry.registerComponent("scrumatplay", () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication("scrumatplay", {
    rootTag: document.getElementById("root"),
  });
}
