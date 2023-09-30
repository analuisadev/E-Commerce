import { useState, useContext } from 'react';

import { Text, View, Switch } from 'react-native';

import { styles } from './styles';

import { ThemeContext } from '../../context/ThemeContext';

export default function Configuration({ navigation }: any) {
  const { currentTheme, chosenTheme, saveData } = useContext(ThemeContext);

  const style = styles(chosenTheme);

  return <View style={style.container}>
    <Text style={style.title}>Configuração</Text>

    <View style={style.inputArea}>
      <Text style={style.subTitle}>Tema: {currentTheme}</Text>
      <Switch
        onValueChange={() => currentTheme === 'dark' ?
          saveData('light') :
          saveData('dark')
        }
        value={currentTheme === 'dark' ? true : false}
      />
    </View>
  </View>

}

