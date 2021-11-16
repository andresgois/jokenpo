import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./Icone.module";

const pedra = require('../../imgs/pedra.png');
const papel = require('../../imgs/papel.png');
const tesoura = require('../../imgs/tesoura.png');

export const Icone = (props) => {

  if(props.icone === 'Pedra'){
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{props.personagem}</Text>
        <Image source={ pedra } />
      </View>
    );
  }else if(props.icone === 'Papel'){
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{props.personagem}</Text>
        <Image source={ papel } />
      </View>
    );
  }else if(props.icone === 'Tesoura'){
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{props.personagem}</Text>
        <Image source={ tesoura } />
      </View>
    );
  }
  
  return null;

}

