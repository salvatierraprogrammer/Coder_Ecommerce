import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 




const Profile = () => {
  return (
    <View> 
      <Header title="Mi perfil"/>
      <View style={{ alignItems: "center", marginTop: 15, }}>
      <Image 
      style={ styles.imagen }
      source={{ 
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" }}
      />
    <View>
      <Pressable onPress={()=> console.log("abrir camara")}>
        <Entypo name="camera" size={24} color="black" />
     </Pressable>
    </View>
    <View>
    <Pressable onPress={()=> console.log("abrir galeria")}>
    <FontAwesome name="photo" size={24} color="black" />
    </Pressable>
    </View>
    <View>
    <Pressable onPress={()=> console.log("abrir ubicacion")}>
    <Entypo name="location" size={24} color="black" />
    </Pressable>

    </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  imagen:{
    width: 200,
    height: 200,
    borderRadius: 80,
    
  },

})

export default Profile


