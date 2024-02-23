import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani"; // Importa o estilo de fonte Rajdhani Semi-Bold
import * as Font from "expo-font"; // Importa o módulo expo-font para carregar fontes personalizadas

import LoginScreen from "./screens/Login"; // Importa o componente de tela de login
import BottomTabNavigator from "./components/BottomTabNavigator"; // Importa o componente de navegação inferior

import { createSwitchNavigator, createAppContainer } from "react-navigation"; // Importa funções para criar um navegador de troca de tela e um contêiner de aplicativo

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false // Define o estado inicial da fonte como não carregada
    };
  }

  async loadFonts() {
    await Font.loadAsync({ // Carrega a fonte Rajdhani_600SemiBold de forma assíncrona
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true }); // Atualiza o estado indicando que a fonte foi carregada
  }

  componentDidMount() {
    this.loadFonts(); // Chama a função para carregar fontes quando o componente é montado
  }

  render() {
    const { fontLoaded } = this.state; // Extrai o estado de fontLoaded
    if (fontLoaded) {
      return <AppContainer />; // Retorna o contêiner do aplicativo quando as fontes estiverem carregadas
    }
    return null; // Retorna null enquanto as fontes estão sendo carregadas
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen // Define a tela de login como uma rota do navegador de troca de tela
    },
    BottomTab: {
      screen: BottomTabNavigator // Define a navegação inferior como uma rota do navegador de troca de tela
    }
  },
  {
    initialRouteName: "Login" // Define a tela inicial como a tela de login
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);// Cria um contêiner de aplicativo que envolve o navegador de troca de tela
