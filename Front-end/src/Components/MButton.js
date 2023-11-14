import { Pressable, Text } from "react-native";
import styles from "../Themes/LightTheme";

export default function MButton(props) {
    return(
        <Pressable
            style={!props.color ? styles.MButtonCont : {...styles.MButtonCont, backgroundColor: props.color} }
            onPress={() => props.onPress()}
            >
            <Text
                selectable={false}
                style={styles.MButtonText}>
                {props.value}
            </Text>
        </Pressable>
    )
}