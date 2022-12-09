import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Axios } from 'axios';
const axios = require('axios').default;
//para imortar tengo que instalar primero el node_module de la libreria a utilizar

export default function App() {
  //una variable y una funcion que modifica esa frase
  //const [frase,setFrase] = React.useState(null);
  const [loading,setLoading] = React.useState(false);

  const [nombre,setNombre] = React.useState(null);
  const [estado,setEstado] = React.useState(null);
  const [especie,setEspecie] = React.useState(null);
  const [genero,setGenero] = React.useState(null);
  const [ubicacion,setUbicacion] = React.useState(null);
  const [imagenUrl,setImagenUrl] = React.useState(null);

  function pegarApi() {
    /*
    axios.get('https://dog-api.kinduff.com/api/facts')
    .then(function (resp) {
        //console.log(resp.data.facts);
        setFrase(resp.data.facts[0]);
        setLoading(false);
    })
    .catch(function (err) {
        setFrase("Ocurrio un error en el llamado a la API");
    });*/
    setLoading(true)
    const random = Math.floor(Math.random() * 826)
    axios.get(`https://rickandmortyapi.com/api/character/${random}`)
    .then(function (resp) {
        setNombre(resp.data.name);
        setEstado(resp.data.status);
        setEspecie(resp.data.species);
        setGenero(resp.data.gender);
        setUbicacion(resp.data.location.name);
        setImagenUrl(resp.data.image);
        setLoading(false);
    })
    .catch(function (err) {
        console.log(err);
    });

  }
  return (
    <View style={styles.container}>

      <View style={styles.head}> 
        <Text style={styles.headText}>Rick Y Morty API</Text>
      </View>
      <View style={styles.bodyApi}>
        {!loading ? <Button color='#45A14B' title='Obtener Personaje Random' onPress={()=>pegarApi()}/> : <ActivityIndicator size="large"/> }
      
        <View style={styles.datos}>
        {imagenUrl!= null ?  <Image style={{width: 225, height:225, alignItems:'center', marginVertical: '10%'}} source={{uri: imagenUrl}}/> : null}
        {nombre != null ? <Text style={styles.text}>Nombre: {nombre}</Text> : null }
        {estado != null ? <Text style={styles.text}>Estado: {estado=='Dead' ? 'Muerto' : estado=='Alive' ? 'Vivo' : 'Desconocido'}</Text> : null }
        {especie != null ? <Text style={styles.text}>Especie: {especie}</Text> : null }
        {genero != null ? <Text style={styles.text}>Genéro: {genero=='Male' ? 'Masculino' : genero=='Female' ? 'Femenino' : genero=='Genderless' ? 'Sin Genero' : 'Desconocido'}</Text> : null }
        {ubicacion != null ? <Text style={styles.text}>Ubicacion: {ubicacion}</Text> : null }
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: '2%',
    alignSelf: 'flex-start',
  }
  ,
  datos:{
    marginVertical: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  head: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008000',
    width: '100%'
  },
  headText: {
    height: 100,
    marginTop:90,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  bodyApi: {
    flex: 5,
    marginVertical: '10%'
    
  },
});
