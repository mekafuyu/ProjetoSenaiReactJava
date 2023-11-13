import { Pressable, Text } from "react-native";
import styles from "../Themes/Styles";

export default function MButton(props) {
    return(
        <Pressable
            style={styles.MButtonCont}
            onPress={props.onPress()}
            >
            <Text
                style={styles.MButtonText}>
                {props.value}
            </Text>
        </Pressable>
    )
}