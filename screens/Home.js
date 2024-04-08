import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../style/MainStyle";
import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const navigation = useNavigation();
  const [nome, setNome] = useState(null);
  const [ra, setRa] = useState(null);
  const [semestre, setSemestre] = useState(null);
  const [disciplina, setDisciplina] = useState(false);
  const [isSelected, setisSelected] = useState(false);

  const salvar = () => {
    console.log("Nome:", nome);
    console.log("R.A:", ra);
    console.log("Semestre:", semestre);
    console.log("Disciplina:", disciplina);
    console.log("Termos de uso aceitos:", isSelected);

    alert('Cadastrado com sucesso !');
    navigation.navigate('Login')
  }





  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Image style={styles.logoRegister} source={require('../assets/RegisterLogo.png')} />


      <Input
        placeholder="Nome: "
        onChangeText={(value) => setNome(value)}
        value={nome}

      />
      <Input
        placeholder="R.A: "
        onChangeText={value => {
          setRa(value)

        }}
        value={ra}

        keyboardType="number-pad"

      />
      <View style={styles.containerMask}>
        <Input
          placeholder="Semestre:"
          onChangeText={(value) => setSemestre(value)}
          value={semestre !== null ? semestre.toString() : ""} // Verifica se semestre é null antes de converter para string
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.containerMask}>
        <Input
          placeholder="Disciplina:"
          onChangeText={(value) => setDisciplina(value)}
          value={disciplina !== null ? disciplina.toString() : ""} // Verifica se disciplina é null antes de converter para string
        />
      </View>



      <CheckBox
        title='Aceito os termos de uso'
        checkedIcon='check'
        uncheckedIcon='square-o'
        checkedColor="green"
        uncheckedColor="red"
        checked={isSelected}
        onPress={() => setisSelected(!isSelected)}

      />

      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Salvar"
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
      />

    </View>
  );
}

const specificStyle = StyleSheet.create({

  button: {
    width: 100,
    marginTop: 10,

  },

});
