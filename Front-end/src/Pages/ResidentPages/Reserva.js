import styles from "../../Themes/LightTheme";
import MButton from "../../Components/MButton";
import MSelect from "../../Components/MSelect";
import MDateInput from "../../Components/MDateInput";
import { Button, Text, SafeAreaView, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import axios from "axios";

export class Reserva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipos: [
        {label: "Churrasqueiras", value: "churrasqueira"},
        {label: "Vagas", value: "vaga"}
      ],
      tipoSelecionado: "",
      tiposOptions: [],
      reservaId: "",
      reserva: {
        number: "",
        residentId: "",
        condominiumId: "",
        startDate: "",
        endDate: "",
      },
      loggedUser: {},
      condoId: ""
    };
  }

  //  number;
  //  resindentId;
  //  condominiumId;
  //  blockNumber;
  //  apartNumber;
  //  startDate;
  //  endDate;

  async componentDidMount(){
    await this.getUserFromSession()
    await this.getCondoId()
  }

  async getUserFromSession() {
    let stringJson = sessionStorage.getItem("loggedUser");
    if (!stringJson) this.props.navigation.navigate("Login");

    let user = await JSON.parse(stringJson)
    await this.setState({
      ...this.state,
      loggedUser: user,
      reserva: {
        ...this.state.reserva,
        residentId: user.userId,
      }
    });
  }

  async getCondoId() {
    let res = await axios.get(
      `http://localhost:8080/resident/id/${this.state.loggedUser.userId}`
    );
    let condoId = res.data.condominiumId;
    this.setState({
      ...this.state,
      condoId: condoId,
      reserva: {
        ...this.state.reserva,
        condominiumId: condoId
      },
    });
  }

  async getItems() {
    await axios
      .get(`http://localhost:8080/${this.state.tipoSelecionado}/condo/${this.state.condoId}`)
      .then(
        async (res) => {
          let newOptions = [];
          res.data.map((item) => {
            newOptions.push({label: item.number, value: {number: item.number, id: item.id} })
          })
          await this.setState({ ...this.state, tiposOptions: newOptions })
      });
  }

  async tryReservar() {
    await axios
      .post(`http://localhost:8080/${this.state.tipoSelecionado}/${this.state.reservaId}`, this.state.reserva)
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <MSelect
            label="Tipo:"
            width="100"
            options={this.state.tipos}
            onChange={async (option) => {
              await this.setState({
                ...this.state,
                tipoSelecionado: option.value,
              });
              await this.getItems();
            }}
          />

          <MSelect
            label="Disponiveis:"
            width="100"
            options={this.state.tiposOptions}
            onChange={async (option) => {
              await this.setState({
                ...this.state,
                reservaId: option.value.id,
                reserva: {...this.state.reserva, number: option.value.number}
              });
            }}
          />

          <Text>Data de Inicio</Text>
          <MDateInput onChange={(e) => this.setState({...this.state, reserva: {...this.state.reserva, startDate: e.target.value}})} />
          
          <Text>Data de Finalização</Text>
          <MDateInput onChange={(e) => this.setState({...this.state, reserva: {...this.state.reserva, endDate: e.target.value}})} />

          <MButton
            onPress = {() => this.tryReservar()}
            value = "Reservar"
          ></MButton>
        </View>
      </SafeAreaView>
    );
  }
}
