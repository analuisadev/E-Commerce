import { useContext } from 'react'

import { Text, View, StatusBar, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { ThemeContext } from '../../context/ThemeContext';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import { ProductsContext } from '../../context/ProductsContext';

export default function Finish({ navigation }: any) {
  const { chosenTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthenticationContext);
  const { amount, shoppingCart } = useContext(ProductsContext);

  const style = styles(chosenTheme);

  return <View style={style.container}>
    <StatusBar />
   
    <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Principal')}>
      <Text style={style.buttonText}>Finalizar</Text>
    </TouchableOpacity>
  </View>
}