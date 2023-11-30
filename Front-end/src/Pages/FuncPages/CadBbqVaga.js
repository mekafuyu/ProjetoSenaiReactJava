import styles from "../../Themes/LightTheme";
import MButton from "../../Components/MButton";
import MTextInput from "../../Components/MTextInput";
import MSelect from "../../Components/MSelect";
import { SafeAreaView, View } from "react-native";
import React, { useState, useContext } from "react";
import axios from "axios";

export class CadBbqVaga extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      tipos: [
        {value: "vaga", label: "Vaga"},
        {value: "churrasqueira", label: "Churrasqueira"}
      ],
      tipo: "",
      item: {
        number : "",
        condominiumId : "",
      },
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
    console.log(this.state)
    if(this.state.item.condominiumId == "" || this.state.item.number == "" )
      return

    let exists = (await axios.get(`http://localhost:8080/${this.state.tipo}/condo/${this.state.item.condominiumId}/${this.state.item.number}`)).data
    if (exists.length > 0)
      return

    axios
      .post(`http://localhost:8080/${this.state.tipo}`,this.state.item)
      .then((data) => {console.log(data)})
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <MTextInput
            label="Número:"
            value={this.state.item}
            setValue={(text) => {
              this.setState({
                ...this.state,
                item: { ...this.state.item, number: text },
              });
            }}
          ></MTextInput>
          
          <MSelect
            label="Tipo de item a Cadastrar:"
            width="100"
            options={this.state.tipos}
            onChange={(option) =>
              this.setState({
                ...this.state,
                tipo: option.value,
              })
            }
          />

          <MSelect
            label="Condomínio:"
            width="100"
            options={this.state.options}
            onChange={(option) =>
              this.setState({
                ...this.state,
                item: {
                  ...this.state.item,
                  condominiumId: option.value},
              })
            }
          />
          
          <MButton
            onPress={() => {
              this.tryCad()
            }}
            value="Cadastrar Item"
            color="yellow"
          ></MButton>
          
        </View>
      </SafeAreaView>
    );
  }
}
