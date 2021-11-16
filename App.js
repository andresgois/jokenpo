import React, { useState } from "react";
import { View, Text } from "react-native";
import { BTN } from "./components/Botoes/BTN";
import { Topo } from "./components/Topo/Topo";

const App = () => {

  const [escUsuario, setEscUsuario] = useState('');
  const [escPC, setEscPC] = useState('');
  const [result, setResult] = useState('');

  function handle(escUsuario){
    setEscUsuario(escUsuario)
    let escolhapc = Math.floor(Math.random() * 3);
    let item = '';
    switch(escolhapc){
      case 0: item = 'Pedra'; break;
      case 1: item = 'Papel'; break;
      case 2: item = 'Tesoura'; break;
    }
    setEscPC(item)
    
    if(item === 'Pedra'){
      if(escUsuario === 'Pedra'){
        setResult('Empate')
      }else if(escUsuario === 'Papel'){
        setResult('Usuário Ganhou')
      }else{
        setResult('Computador Ganhou')
      }
    }
    if(item === 'Papel'){
      if(escUsuario === 'Papel'){
        setResult('Empate')
      }else if(escUsuario === 'Tesoura'){
        setResult('Usuário Ganhou')
      }else{
        setResult('Computador Ganhou')
      }
    }
    if(item === 'Tesoura'){
      if(escUsuario === 'Tesoura'){
        setResult('Empate')
      }else if(escUsuario === 'Pedra'){
        setResult('Usuário Ganhou')
      }else{
        setResult('Computador Ganhou')
      }
    }
  }

  return(
    <View>

      <Topo /> 

      <BTN />

      <

      <Text>Escolha do Computador: {escPC}</Text>
      <Text>Escolha do Usuário: {escUsuario}</Text>
      <Text>Resultado: {result}</Text>

      
    </View>
  )
}

export default App;