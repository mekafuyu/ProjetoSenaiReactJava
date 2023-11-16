import { useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../Themes/LightTheme";

export default function MButton(props) {
    const [scale, setScale] = useState(1)
    return(
        <Pressable
            style={!props.color ? styles.MButtonCont : {...styles.MButtonCont, backgroundColor: props.color} }
            onPressIn={() => setScale(1.5)}
            onPressOut={() => setScale(1)}
            onPress={() => props.onPress()}
            >
            {props.icon ?
                <FontAwesomeIcon icon={props.icon} />
                : null
            }
            <Text
                selectable={false}
                style={styles.MButtonText}>
                {props.value}
            </Text>
        </Pressable>
    )
}