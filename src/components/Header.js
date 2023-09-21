import { Text, View, StyleSheet, Pressable } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../theme/colors';


const Header = ({ title, navigation })  =>{
  
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    container:{
        
        height: 100,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:colors.lightBlue,
    },
    headerText: {
      fontSize: 25,
      fontWeight: "600",
      color: colors.white,
      // fontFamily: "Dancing",

    },  
  
});
export default Header;