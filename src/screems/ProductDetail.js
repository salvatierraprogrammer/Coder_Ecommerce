import { View, Text, Image, StyleSheet, Button, Pressable } from 'react-native';
import React from 'react';
import { products } from '../data/products';
import Header from '../components/Header';

const ProductDetail = ({ route, navigation}) => {
    
    const selectedItem = route.params.selectedItem;

  return (
    <View>
       <Header title={selectedItem.title}/>
       <Pressable onPress={() => navigation.goBack() }>
           <Text>Ir atrar</Text>
       </Pressable>
      <View style={styles.containerImage}>
      <Image
      style={styles.image}
      source={{
          uri: selectedItem.images[2],
      }}
      />
      <Text style={styles.title}>Titulo: {selectedItem.title}</Text>
      <Text style={styles.description}> 
       Descripcion: {selectedItem.description}{" "}
      </Text>
      <View></View>
      <Text>Rating: {selectedItem.rating}</Text>
      <Text>Precio:{selectedItem.price}</Text>
      <Button title='Agregar al carrito'
      onPress={() => console.log("hago algo")}/>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    image: {
        height: 350,
        width: 350,
    },
    containerImage:{
        alignItems: "center",
        
    },
    title:{
        fontSize: 30,
        // fontFamily: "Pacifico",
    },
    description:{
        fontSize: 20,
        marginVertical: 15,
    },  
});


export default ProductDetail;