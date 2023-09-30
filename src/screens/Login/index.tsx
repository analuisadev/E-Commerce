import { useState, useContext } from "react";

import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';

import { styles } from './styles';

import { ThemeContext } from "../../context/ThemeContext";
import { AuthenticationContext } from "../../context/AuthenticationContext";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { chosenTheme } = useContext(ThemeContext);
  const { login } = useContext(AuthenticationContext);

  const logIntoTheSystem = () => {
      const result = login(email, password);
      if(result === 'ok') {
        navigation.navigate('Principal')
      } else {
        Alert.alert('Email ou senha inválidos!')
      }
  }

  const style = styles(chosenTheme);

  return (
    <View style={style.container}>
      <StatusBar />
      <Text style={style.title}>Login</Text>

      <View style={style.inputArea}>
        <TextInput
          style={style.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={style.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        style={style.button}
        onPress={() => logIntoTheSystem()}
      >
        <Text style={style.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

