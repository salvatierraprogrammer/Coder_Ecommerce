import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../screems/Products'
import Home from '../screems/Home'
import ProductDetail from '../screems/ProductDetail'
import TabNav from './TabNav'


const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="home" 
    screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen component={Home} name="home"/>
        <Stack.Screen component={Products} name="products" />
        <Stack.Screen component={ProductDetail} name="productDetail"/>
    </Stack.Navigator>

  )
}

export default RootNavigation