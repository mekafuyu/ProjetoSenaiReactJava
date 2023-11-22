import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MTextInput from "../Components/MTextInput";
import MSelect from "../Components/MSelect";
import { SafeAreaView, View } from "react-native";
import React, { useState, useContext } from "react";
import axios from "axios";

export class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      user: {
        condominiumId: "",
        name: "",
        cpf: "",
        pwd: "",
        propManager: false,
        blockNumber: "",
        apartNumber: "",
      },
      cPwd : ""
    };
  }

  componentDidMount() {
    this.getCondos();
  }

  async getCondos() {
    await axios.get("http://localhost:8080/condominium").then((data) => {
      let newOptions = [];
      data.data.map((condo) => {
        newOptions.push({ value: condo.id, label: condo.name });
      });
      console.log(newOptions);
      this.options = newOptions;
      this.setState({ ...this.state, options: newOptions });
    });
  }

  async tryCad() {
    if(this.state.user.condominiumId == "")
      return
    axios
      .get(`http://localhost:8080/condominium/id/${this.state.user.condominium}`)
      .then((data) => {
        console.log(data.data);
      });
    
    axios
      .post(`http://localhost:8080/resident`, this.state.user)
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <MTextInput
            label="Nome:"
            value={this.state.user}
            setValue={(text) => {
              this.setState({
                ...this.state,
                user: { ...this.state.user, name: text },
              });
            }}
          ></MTextInput>
          <MTextInput
            label="Cpf:"
            value={this.state.user}
            setValue={(text) => {
              this.setState({
                ...this.state,
                user: { ...this.state.user, cpf: text },
              });
            }}
          ></MTextInput>
          <MSelect
            label="Condomínio:"
            width="100"
            options={this.state.options}
            onChange={(option) =>
              this.setState({
                ...this.state,
                user: {
                  ...this.state.user,
                  condominiumId: option.value},
              })
            }
          />
          <MTextInput
            label="Bloco:"
            value={this.state.user}
            setValue={(text) => {
              this.setState({
                ...this.state,
                user: { ...this.state.user, blockNumber: text },
              });
            }}
          ></MTextInput>
          <MTextInput
            label="Apartamento:"
            value={this.state.user}
            setValue={(text) => {
              this.setState({
                ...this.state,
                user: { ...this.state.user, apartNumber: text },
              });
            }}
          ></MTextInput>
          <MTextInput
            label="Senha:"
            value={this.state.user}
            setValue={(text) => {
              this.setState({
                ...this.state,
                user: { ...this.state.user, pwd: text },
              });
            }}
          ></MTextInput>
          <MTextInput
            label="Confirmar Senha:"
            value={this.state.user}
            setValue={(text) => {
              this.setState({
                ...this.state,
                cPwd: text ,
              });
            }}
          ></MTextInput>
          <MButton
            onPress={() => {
              this.tryCad()
              console.log(this.state.user)
            }}
            width="100"
            value="test"
          ></MButton>
          
        </View>
      </SafeAreaView>
    );
  }
}
