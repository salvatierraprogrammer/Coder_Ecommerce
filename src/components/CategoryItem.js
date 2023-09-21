import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { colors } from '../theme/colors';
import { FontAwesome5 } from '@expo/vector-icons';

const CategoryItem = ({ item, navigation }) => {
  console.log(item);

  return (
 
    <Pressable
      onPress={() => navigation.navigate("products", { item })}
      style={styles.categoryItem}
    >
      <Text style={styles.categoryText}>
        <FontAwesome5 name="house-user" size={24} color="black" /> {item}
      </Text>
    </Pressable>
   
  );
};

const styles = StyleSheet.create({
  
  categoryItem: {
   
    backgroundColor: colors.white,
    borderRadius: 10, // Bordes redondeados
    marginHorizontal: 10, // Espaciado horizontal
    marginVertical: 8, // Espaciado vertical
    padding: 10, // Espaciado interno
    flexDirection: 'row', // Para alinear el ícono y el texto en línea
    alignItems: 'center', // Para centrar verticalmente
   
  },
  categoryText: {
     display: "flex",
    fontSize: 22,
    color: "black",
    marginLeft: 10, // Espaciado entre el ícono y el texto
    textAlign: "center",
    
   
  },
    icono: {
      width: 100,
      height: 100,
      background: "white",

    },
});

export default CategoryItem;