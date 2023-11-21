import { useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Themes/LightTheme";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Themes/Metrics";

export default function MButton(props) {
  const [scale, setScale] = useState(1);
  return (
    <Pressable
      style={{
        ...styles.MButtonCont,
        backgroundColor: props.color
          ? props.color
          : styles.MButtonCont.backgroundColor,
        width: props.width
          ? horizontalScale(props.width)
          : styles.MButtonCont.width,
      }}
      onPressIn={() => setScale(1.5)}
      onPressOut={() => setScale(1)}
      onPress={() => props.onPress()}
    >
      {props.icon ? (
        <FontAwesomeIcon
          icon={props.icon}
          size="lg"
          style={{ marginRight: 15 }}
        />
      ) : null}
      <Text selectable={false} style={styles.MButtonText}>
        {props.value}
      </Text>
    </Pressable>
  );
}
