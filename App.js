import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./App.module";
import { Icone } from "./components/Icones/Icone";
import { Topo } from "./components/Topo/Topo";

const App = () => {

  const [escUsuario, setEscUsuario] = useState('');
  const [escPC, setEscPC] = useState('');
  const [result, setResult] = useState('');

  function jokenpo(escUsuario){
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
      
      <View style={styles.btn}>
        <Button title="Pedra" onPress={ () => jokenpo('Pedra')} />
        <Button title="Papel" onPress={ () => jokenpo('Papel')} />
        <Button title="Tesoura" onPress={ () => jokenpo('Tesoura')} />
      </View>

      <View style={styles.result}>
        <Text style={styles.txtResult}>Resultado: {result}</Text>
        <Icone personagem="Computador" icone={escPC} />
        <Icone personagem="Usuário" icone={escUsuario}  />
      </View>
      
    </View>
  )
}

export default App;