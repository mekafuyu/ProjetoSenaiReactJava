import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UtilsContext } from './src/config/context'

import { Index } from "./src/Pages/Index"
// import { Login } from "./src/pages/login"
// import { Cadastro } from "./src/pages/cadastro"
// import { Calculadora } from "./src/pages/calculadora"
// import { Historico } from "./src/pages/historico"

export default function App() {
  const [utils, setUtils] = useState()

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={Index} />
          {/* <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Cadastro Funcionário" component={Cadastro} />
          <Stack.Screen name="Cadastro Condomínio" component={Cadastro} /> */}
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
};

