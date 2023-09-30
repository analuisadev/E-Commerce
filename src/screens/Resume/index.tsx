import { useContext } from 'react'

import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

import Product from '../../components/Product';

import { styles } from './styles';

import { ThemeContext } from '../../context/ThemeContext';
import { AuthenticationContext } from '../../context/AuthenticationContext';
import { ProductsContext } from '../../context/ProductsContext';

export default function Resume({ navigation }: any) {
  const { chosenTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthenticationContext);
  const { amount, shoppingCart } = useContext(ProductsContext);

  const style = styles(chosenTheme);

  return <View style={style.container}>
    <StatusBar />
    <View style={style.titleArea}>
      <Text style={style.title}>Olá, {user?.name}</Text>
      <View style={style.cartArea}>
        <TouchableOpacity onPress={() => { }}>
          <Feather name="shopping-cart" size={30} color="#fff" style={style.cartIcon} />
        </TouchableOpacity>
        {amount > 0 && <View style={style.cartQuantityArea}>
          <Text style={style.cartQuantity}>{amount}</Text>
        </View>}
        <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={style.iconArea} >
          <MaterialCommunityIcons name="settings" size={30} color="#fff" style={style.icon} />
        </TouchableOpacity>
      </View>
    </View>

    <FlatList
      data={shoppingCart}
      keyExtractor={(item) => Math.random()}
      renderItem={({ item }) => <Product item={item} add={false} />}
      style={style.list}
      showsVerticalScrollIndicator={false}
    />
    <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Finalizar Compras')}>
      <Text style={style.buttonText}>Finalizar</Text>
    </TouchableOpacity>
  </View>
}