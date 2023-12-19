import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '@/screens/Home';
import ProductDetail from '@/screens/ProductDetail';
import {Product} from '@/models/product.model';
import {AppStackParamList} from '@/models/types';

const MainStack = createNativeStackNavigator<AppStackParamList>();

const routes: Array<React.ComponentProps<typeof MainStack.Screen>> = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'ProductDetail',
    component: ProductDetail,
  },
];

const AppStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {routes.map(item => (
        <MainStack.Screen key={item.name} {...item} />
      ))}
    </MainStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
