import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../style/MainStyle";
import { useNavigation } from '@react-navigation/native';



export default function Register() {

  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);


  const voltar = () => {
    navigation.goBack(); // Função para voltar para a tela anterior
  }

  const Cadastro = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>


      <Input
        
        placeholder="Digite seu password"
        leftIcon={{ type: "font-awesome", name: "eye" }}
        onChangeText={(value) => setEmail(value)}
        keyboardType="number-pad"
      />

      <Input
        placeholder="Digite seu password "
        leftIcon={{ type: "font-awesome", name: "eye" }}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />

      <View style={styles.botoes}>

        <Button

          icon={
            <Icon
              size={15}
              color="white"
            />
          }
          title="Cadastrar"
          onPress={() => Cadastro()}
        />
      </View>
    </View>
  );
}

const specificStyle = StyleSheet.create({

  logoRegister: {
    width: 200,
    height: 200,
    alignSelf: 'flex-start'
  },
})

