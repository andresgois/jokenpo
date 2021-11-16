import React from "react";
import { Text, View, Image } from "react-native";

const pedra = require('../../imgs/pedra.png');
const papel = require('../../imgs/papel.png');
const tesoura = require('../../imgs/tesoura.png');


export const Icone = (props) => {
  return (
    <View>
      <Text>Escolha do Computador: {escPC}</Text>
    </View>
  );
}