import { useContext } from 'react'

import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

import { products } from './products';

import Product from '../../components/Product';

import { styles } from './styles';

import { ThemeContext } from '../../context/ThemeContext';

export default function Main({ navigation }: any) {
  const recentlySeen: Array<Object> = [];

  const { chosenTheme } = useContext(ThemeContext);

  const style = styles(chosenTheme);

  return <View style={style.container}>
    <StatusBar />
    <View style={style.titleArea}>
      <Text style={style.title}>Olá, NOME</Text>
      <View style={style.cartArea}>
        <TouchableOpacity onPress={() => { }}>
          <Feather name="shopping-cart" size={30} color="#fff" style={style.cartIcon} />
        </TouchableOpacity>
        <View style={style.cartQuantityArea}>
          <Text style={style.cartQuantity}>0</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={style.iconArea} >
          <MaterialCommunityIcons name="settings" size={30} color="#fff" style={style.icon} />
        </TouchableOpacity>
      </View>
    </View>

    <FlatList
      data={products}
      keyExtractor={(item) => Math.random()}
      renderItem={({ item }) => <Product item={item} add={true} />}
      style={style.list}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() =>
        <View>
          {recentlySeen.length > 0 &&
            <View style={style.recentlySeen}>
              <Text style={style.titleLastSeen}>Últimos vistos</Text>
              <FlatList
                data={recentlySeen}
                keyExtractor={(item) => Math.random()}
                renderItem={({ item }) => <Product item={item} add={false} />}
                style={style.list}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>}
          <Text style={[style.title, { paddingLeft: 16 }]}>Produtos</Text>
        </View>
      }
    />
  </View>

}

