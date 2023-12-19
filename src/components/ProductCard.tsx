import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Product} from '@/models/product.model';
import Animated from 'react-native-reanimated';

const ProductCard = ({
  id,
  title,
  thumbnail,
  description,
  rating,
  price,
}: Product) => {
  console.log(`@/assets/images/${thumbnail}`);
  return (
    <View style={styles.box}>
      <Animated.Image
        sharedTransitionTag={`T${id}`}
        style={styles.imageContainer}
        source={thumbnail}
      />

      <Text style={styles.price}>
        <Text style={styles.currency}>$</Text>
        {price}
      </Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    height: 250,
    width: 240,
    padding: 8,
  },
  imageContainer: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 18,
    color: '#323232',
    fontWeight: 'bold',
  },
  currency: {
    color: '#24a8af',
  },
  title: {
    fontSize: 24,
    color: '#323232',
    fontWeight: 'bold',
  },
});
