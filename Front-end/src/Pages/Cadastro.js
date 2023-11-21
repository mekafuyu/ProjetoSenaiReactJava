import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MTextInput from "../Components/MTextInput";
import MSelect from "../Components/MSelect"
import { SafeAreaView, View } from "react-native";
import { useState, useContext } from "react";
import axios from "axios";

export function Cadastro(props) {


  const [user, setUser] = useState({
    name: "",
    cpf: "",
    condominium: "",
    block: "",
    apart: "",
    pwd: "",
    cPwd: "",
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MTextInput
          label="Nome:"
          value={user}
          setValue={(text) => {
            setUser({ ...user, name: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Cpf:"
          value={user}
          setValue={(text) => {
            setUser({ ...user, cpf: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Condominio:"
          value={user}
          setValue={(text) => {
            setUser({ ...user, condominium: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Bloco:"
          value={user}
          setValue={(text) => {
            setUser({ ...user, block: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Apartamento:"
          value={user}
          setValue={(text) => {
            setUser({ ...user, apart: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Senha:"
          value={user}
          setValue={(text) => {
            setUser({ ...user, pwd: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Confirmar Senha:"
          value={user}
          setValue={(text) => {
            setUser({ ...user, cPwd: text });
          }}
        ></MTextInput>
        <MButton
          onPress={() => {
            axios.get(`http://localhost:8080/condominium/${user.condominium}`)
                 .then((data) => { console.log(data.data) })
          }}
          width="100"
          value="test"
        ></MButton>
        
      </View>
    </SafeAreaView>
  );
}
