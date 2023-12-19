import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Product} from './product.model';

export type AppStackParamList = {
  Home: undefined;
  ProductDetail: {data: Product};
};

export type ProductDetailProps = NativeStackScreenProps<
  AppStackParamList,
  'Home',
  'ProductDetail'
>;
