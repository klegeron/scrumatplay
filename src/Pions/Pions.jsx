import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity, View } from "react-native";

function Pions({ moves, ...rest }) {
    const insets = useSafeAreaInsets();

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    return (
        <TouchableOpacity activeOpacity={0.8} {...rest}>
            <View>
                <img
                    src="./images/black_pawn.svg"
                    alt="pion"
                    draggable="true"
                    style={{
                        position: "absolute",
                        width: "87px",
                        height: "100px",
                        top: Math.max(insets.top, 900),
                        left: Math.max(insets.left, 550),
                    }}
                    onClick={() => {
                        console.log("Click pions ---> " + moves);
                        return moves.mobilitePions();
                    }}
                    onDragStart={(e) => drag(e)}
                />
            </View>
        </TouchableOpacity>
    );
}

export default Pions;
