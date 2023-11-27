import styles from "../../Themes/LightTheme";
import MButton from "../../Components/MButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import MTextInput from "../../Components/MTextInput";
import MDateInput from "../../Components/MDateInput";
import { Button, Text, SafeAreaView, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function ReservarChurrasqueira(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MDateInput
          onChange={(e) => console.log(e.target.value)}/>
      </View>
    </SafeAreaView>
  );
}
