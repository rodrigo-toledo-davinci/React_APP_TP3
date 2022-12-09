import 'react-native-gesture-handler';
import * as React from 'react';
import { View,Text, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{textAlign:'center', marginVertical:'5%'}}>Bienvenido a la aplicacion movil</Text> 
        <Text style={{textAlign:'justify'}}>Este es un conjunto de varias APIs que generan personajes aleatorios de franquicias</Text>
        <Image style={{width: 225, height:225, alignItems:'center', marginVertical: '10%',borderRadius: 100}} source={require('../images/apiimg.jpg')}/>
        
      </View>
    );
  }