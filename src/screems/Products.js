import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import React, {useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import { products } from '../data/products';
import ProductsItem from '../components/ProductsItem';
 

const Products = ({ route, navigation }) => {
 const [categoryProd, setCategoryProd] = useState([]);
 const [text, setText] = useState(null); 

 const { item } = route.params;
 console.log(item)

  useEffect(() => {
    const categoryProducts = products.filter((el) => el.category === item);
    setCategoryProd(categoryProducts);

    
    
    if (text){
      const titleProduct = products.filter(
        (el) => el.title.toLowerCase() === text.toLowerCase()
      );
      setCategoryProd(titleProduct);
    }
  }, [text, item]);
  

  return (
    <View>
      <Header title={item}/>
      <Pressable  style={styles.goBack} onPress={() => navigation.goBack()}>
      <Text>Ir atras</Text>
      </Pressable>
      <Search text={text} setText={setText}/>      
      {/* <FontAwesome5 style={styles.icono}name="house-user" size={24} color="black" /> */}
      <FlatList 
      data={categoryProd}
      keyExtractor={products.id}
      renderItem={({ item }) => <ProductsItem navigation={navigation } item={item}  />   }
      />
      
        


    </View>
  );
};

const styles = StyleSheet.create({

  goBackText: {
     // Text color for the button
    fontSize: 18,
    fontWeight: "500",
  },
  

},)

export default Products;