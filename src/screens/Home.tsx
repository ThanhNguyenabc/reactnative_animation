import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IcMenu from '@/assets/icons/ic_menu.svg';
import IcMore from '@/assets/icons/ic_more.svg';
import ProductCard from '@/components/ProductCard';
import {productData} from '@/assets/Products';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {Product} from '@/models/product.model';
import {ProductDetailProps} from '@/models/types';
import {Color_black} from '@/utils/constants';

const DURATION = 500;

const Home = () => {
  const navigation = useNavigation<ProductDetailProps>();

  const renderItem = ({item, index}: {item: Product; index: number}) => (
    <Animated.View entering={FadeInDown.delay(index * 200).duration(DURATION)}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', {
            data: item,
          });
        }}>
        <ProductCard {...item} />
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Animated.View entering={FadeInLeft.delay(100).duration(DURATION)}>
            <IcMenu />
          </Animated.View>
          <Animated.View entering={FadeInRight.delay(100).duration(DURATION)}>
            <IcMore />
          </Animated.View>
        </View>
        <Animated.View
          style={styles.bodyContainer}
          entering={FadeInLeft.delay(200).duration(DURATION)}>
          <Text style={styles.title}>Nike Shoes</Text>
          <Text style={styles.subTitle}>Products of your choice</Text>
        </Animated.View>
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.listContent}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          data={productData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color_black,
  },
  subTitle: {
    fontSize: 18,
    color: Color_black,
  },
  bodyContainer: {
    marginTop: 10,
    paddingHorizontal: 30,
  },
  listContainer: {
    padding: 10,
  },
  listContent: {
    alignItems: 'center',
  },
});
