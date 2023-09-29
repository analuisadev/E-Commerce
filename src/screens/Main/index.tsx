import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

import { products } from './products';

import Product from '../../components/Product';

import styles from './styles';

export default function Main({ navigation }: any) {
  const recentlySeen: Array<Object> = [];

  return <View style={styles.container}>
    <StatusBar />
    <View style={styles.titleArea}>
      <Text style={styles.title}>Olá, NOME</Text>
      <View style={styles.cartArea}>
        <TouchableOpacity onPress={() => { }}>
          <Feather name="shopping-cart" size={30} color="#fff" style={styles.cartIcon} />
        </TouchableOpacity>
        <View style={styles.cartQuantityArea}>
          <Text style={styles.cartQuantity}>0</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={styles.iconArea} >
          <MaterialCommunityIcons name="settings" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>

    <FlatList
      data={products}
      keyExtractor={(item) => Math.random()}
      renderItem={({ item }) => <Product item={item} add={true} />}
      style={styles.list}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() =>
        <View>
          {recentlySeen.length > 0 &&
            <View style={styles.recentlySeen}>
              <Text style={styles.titleLastSeen}>Últimos vistos</Text>
              <FlatList
                data={recentlySeen}
                keyExtractor={(item) => Math.random()}
                renderItem={({ item }) => <Product item={item} add={false} />}
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>}
          <Text style={[styles.title, { paddingLeft: 16 }]}>Produtos</Text>
        </View>
      }
    />
  </View>

}

