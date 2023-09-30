import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ProductsContext } from '../../context/ProductsContext';
import { useContext } from 'react';

import styles from './styles';

export default function Product({ item, add }) {
  const { seenProduct } = useContext(ProductsContext);

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={item.image}/>
      <View style={styles.containerText}>
        <Text style={styles.text} numberOfLines={1}>{item.text}</Text>
        <Text style={styles.price}>R$ {item.price}</Text>
      </View>
      { add &&
      <TouchableOpacity style={styles.buttonAdd} onPress={() => seenProduct(item)}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>}
    </View>
  );
}
