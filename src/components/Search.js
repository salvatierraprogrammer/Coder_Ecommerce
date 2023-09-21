import { View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Search = ({text, setText}) => {
   
 const clearText = () => {
    setText(null);
  };

  return (
    <View style={styles.container}>
      <TextInput 
      onChangeText={(value)=> setText(value)}
      value={text}
      style={styles.input}
      placeholder='Busca un producto aqui..'
      />
      <Pressable onPress={() => clearText()}>
      <MaterialCommunityIcons name="window-close" size={30} color="black" />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        
    },
    input: {
        width: "78%",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        marginRight: 15,

    },

});


export default Search;