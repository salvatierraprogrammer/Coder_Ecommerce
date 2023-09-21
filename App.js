import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import { colors } from './src/theme/colors';
import Home from './src/screems/Home';
import Search from './src/components/Search';
import Products from './src/screems/Products';
import { useFonts } from 'expo-font';

import ProductDetail from './src/screems/ProductDetail';
import RootNavigation from './src/navigation/RootNavigation';
import TabNav from './src/navigation/TabNav';

export default function App() {

  // const [fonstLoaded] = useFonts({
  //   Dancing: require("./assets/Fonts/DancingScript-Regular.ttf"),
  //   DancingBold: require("./assets/Fonts/DancingScript-Bold.ttf"),
  //   BebasNeue: require("./assets/Fonts/BebasNeue-Regular.ttf"),
  // });
  // if(!fonstLoaded === false){
  //   return;
  // }

  return (
    
   <NavigationContainer>
      <TabNav/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 

});
