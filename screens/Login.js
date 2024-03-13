import { useState } from "react";
import { View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from "../style/MainStyle";
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{ name: "Principal" }]

    })
  }

  return (
    <View style={styles.container}>
      <Text h3>Tela de Login </Text>
      <Input
        placeholder="E-mail: "
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={(value) => setEmail(value)}
        keyboardType="email-address"
      />

      <Input
        placeholder="Senha: "
        leftIcon={{ type: "font-awesome", name: "key" }}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry = {true}
      />

      <Button 
        icon={
        <Icon
         name= "check"
         size = {15}
         color = "white"
        />
      }
      title = "Entrar"
      onPress={() => entrar()}
      />
    </View>
  );
}


