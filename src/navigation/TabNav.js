import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screems/Profile';
import RootNavigation from './RootNavigation';
import Shop from '../screems/Shop';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { colors } from '../theme/colors';


const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title: "", headerShown: false }}>
     <Tab.Screen 
      options={{ tabBarIcon: ( { focused } ) => <Entypo name="shop" size={24} color={focused ? colors.yellow : "black"} /> }}
      name="rootNavigation" component={RootNavigation} />
     <Tab.Screen 
     options={{ tabBarIcon: ( {focused})=> <Ionicons name="ios-person-circle" size={24} color={focused ? colors.yellow : "black"} /> }}
     name="profile" component={Profile}/>
     <Tab.Screen 
    options={{ tabBarIcon: ( {focused}) => <AntDesign name="shoppingcart" size={24} color={focused ? colors.yellow : "black"} /> }}
     name="myshop" component={Shop}/>
    </Tab.Navigator>
  );
};



const styles = StyleSheet.create({})


export default TabNav