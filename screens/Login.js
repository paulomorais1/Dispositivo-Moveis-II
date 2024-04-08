import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../style/MainStyle";
import { useNavigation } from '@react-navigation/native';
import Logo from "./Logo";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }]
    });
  };

  const Cadastro = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Logo />
      <Input
        style={styles.input}
        placeholder="E-mail: "
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={(value) => setEmail(value)}
        keyboardType="email-address"
        value={email} // Certifique-se de passar o estado do email para a propriedade value
      />
      <Input
        placeholder="Senha: "
        leftIcon={{ type: "font-awesome", name: "key" }}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
        value={password} // Certifique-se de passar o estado da senha para a propriedade value
      />
      <View style={styles.botoes}>
        <Button
          icon={
            <Icon
              size={15}
              color="white"
            />
          }
          title="Entrar"
          onPress={() => entrar()}
        />
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
  button: {
    width: 110,
  },
  specificContainer: {
    alignItems: "center", // Alinha os itens centralizados horizontalmente
  },
});
