import React, { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import rollADie from "roll-a-die";
import Button from "../Button";

function Dices() {
  const [des, setDes] = useState(0);
  const insets = useSafeAreaInsets();

  function lancerDes() {
    const nbDes = 2;
    rollADie({
      element: document.getElementById("containerDes"),
      numberOfDice: nbDes,
      callback: (res) => {
        let valeurTotal = 0;
        res.map((valeur) => (valeurTotal += valeur));
        setDes(valeurTotal);
      },
    });
  }

  return (
    <>
      <div
        id="containerDes"
        style={{
          position: "absolute",
          bottom: Math.max(insets.bottom, 200),
          right: Math.max(insets.right, 50),
        }}
      ></div>
      <View
        style={{
          position: "absolute",
          bottom: Math.max(insets.bottom, 100),
          right: Math.max(insets.right, 15),
          fontSize: "32px",
          fontWeight: "800",
        }}
      >
        Résultat : {des}
      </View>
      <Button
        onPress={() => lancerDes()}
        style={{
          position: "absolute",
          bottom: Math.max(insets.bottom, 16),
          right: Math.max(insets.right, 16),
        }}
      >
        Lancer les dès
      </Button>
    </>
  );
}

export default Dices;
