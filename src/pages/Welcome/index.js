import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import * as Animatable from 'react-native-animatable'

import { useNavigation} from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>
  }else{
  return (
    <View style={styles.container}>

    <View style={styles.containerLogo}>
      <Animatable.Image
      animation="flipInY"
      source={require('../../assets/logo.png')}
      style={{ width: '80%'}}
      resizeMode="contain"
      />
      <Animatable.View animation="fadeInLeft" delay={500}>
      <Text style={styles.title}>N.E.U.R Investimentos</Text>
      <Text style={styles.subtitle}>Não recomendamos, investimos!</Text>
      </Animatable.View>
    </View>

    <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.text}>Faça o login para começar</Text>
      
      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cadastroBtn}>
        <Text style={styles.cadastroText}>Não possui uma conta?</Text>
      </TouchableOpacity>
      

    </Animatable.View>

    </View>
  );}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#111111',
  },
  containerLogo:{
    flex:2,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex:1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 30,
    marginTop: 5,
    textAlign: 'center',
    color: '#Fbb128',
    fontFamily: 'Montserrat_700Bold',
  },
  subtitle:{
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
    color: '#Fbb128',
    fontFamily: 'Montserrat_400Regular',
  },
  text:{
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#00000090',
    fontFamily: 'Montserrat_700Bold',
  },
  button:{
    position: 'absolute',
    backgroundColor: '#111111',
    borderRadius: 50,
    paddingVertical: 8,
    width: '70%',
    height: 60,
    alignSelf: 'center',
    bottom: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Montserrat_700Bold',
  },
  cadastroBtn:{
    position: 'absolute',
    paddingVertical: 8,
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroText:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: '#00000075',
    fontFamily: 'Montserrat_400Regular',
    },
});