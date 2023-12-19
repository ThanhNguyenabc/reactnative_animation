import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Product} from '@/models/product.model';
import IcBack from '@/assets/icons/ic_back.svg';
import IcLike from '@/assets/icons/ic_like.svg';
import {
  Color_black,
  Color_grey,
  Color_red,
  Color_ryan,
} from '@/utils/constants';
import {SuggestedProducts} from '@/assets/SuggestedProduct';
import ProductCard from '@/components/ProductCard';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';
const ProductDetail = () => {
  const {params} = useRoute<
    RouteProp<{
      params: {
        data?: Product;
      };
    }>
  >();

  const {goBack} = useNavigation();
  const [isLiked, setLiked] = useState(false);
  const product = params.data;

  const onLike = () => {
    setLiked(!isLiked);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.greyBackground}>
        <View style={styles.iconsContainer}>
          <Animated.View entering={FadeInLeft.delay(200).duration(500)}>
            <TouchableOpacity style={styles.iconBox} onPress={goBack}>
              <IcBack width={30} height={30} color={Color_grey} />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInRight.delay(200).duration(500)}>
            <TouchableOpacity style={styles.iconBox} onPress={onLike}>
              <IcLike
                width={30}
                height={30}
                color={isLiked ? Color_red : Color_grey}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.Image
          sharedTransitionTag={`T${product?.id}`}
          source={product?.thumbnail}
          style={styles.coverImage}
        />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{product?.title}</Text>
          <View style={styles.ratingBox}>
            <Text style={styles.price}>${product?.price}</Text>
            <Text style={styles.rating}>⭐{product?.rating}</Text>
          </View>
        </View>
        <Text style={styles.description}>{product?.description}</Text>

        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTitle}>Shop now</Text>
          </TouchableOpacity>
        </Animated.View>

        <Text style={styles.suggestTitle}>Suggest Products</Text>

        <ScrollView
          style={styles.suggestContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {SuggestedProducts.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  greyBackground: {
    height: 350,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: 'lightgrey',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  iconBox: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Color_black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  coverImage: {
    height: 320,
    width: 320,

    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bodyContainer: {
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: Color_black,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 24,
    color: Color_black,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 18,
    color: Color_black,
  },
  ratingBox: {
    alignItems: 'center',
  },
  description: {
    marginTop: 20,
  },
  btn: {
    backgroundColor: Color_ryan,
    padding: 10,
    width: '35%',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: '10%',
  },
  btnTitle: {
    fontSize: 18,
    color: '#FFF',
  },
  suggestContainer: {
    flexDirection: 'row',
  },
  suggestTitle: {
    fontSize: 24,
    color: Color_black,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
