import styles from "../../Themes/LightTheme";
import MButton from "../../Components/MButton";
import { SafeAreaView, Text, View } from "react-native";
import axios from "axios";
import React from "react";
import MSelect from "../../Components/MSelect";

export class VisualizarCondoResident extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { id: "", name: "", cep: "", idPropManager: "", election: false },
      ],
      residents: [],
      selected: "",
    };
  }

  async getCondos() {
    await axios.get("http://localhost:8080/condominium").then((data) => {
      let newOptions = [];
      data.data.map((condo) => {
        newOptions.push({ value: condo.id, label: condo.name });
      });
      // console.log(newOptions);
      this.options = newOptions;
      this.setState({ ...this.state, options: newOptions });
    });
  }

  async getResidents() {
    await axios
      .get(`http://localhost:8080/resident/condo/${this.state.selected}`)
      .then(
        async (data) =>
          await this.setState({ ...this.state, residents: data.data })
      );
  }

  async componentDidMount() {
    await this.getCondos();
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <MSelect
            label="Condomínio:"
            width="100"
            options={this.state.options}
            onChange={async (option) => {
              await this.setState({
                ...this.state,
                selected: option.value,
              });
              await this.getResidents();
            }}
          />

          <View style={{ marginTop: 10 }}>
            {this.state.residents.map((resident, index) => (
              <View
                key={index}
                index={index}
                style={{ backgroundColor: "gray", margin: 5, borderRadius: 10 }}
              >
                <Text>{resident.name}</Text>
                <MButton
                  value="remove"
                  width={25}
                  color="red"
                  onPress={async () => {
                    await axios.delete(
                      `http://localhost:8080/resident/delete/${resident.id}`
                    );
                    await this.getResidents();
                  }}
                />
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
