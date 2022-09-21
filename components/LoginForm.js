import React, {useState, useEfect, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions, Animated } from 'react-native';


export default function LoginForm(){
//  Animações
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
    

    useEffect(()=> {
        Animated.spring(offset.y, {
            toValue:0,
            speed: 4,
            useNativeDriver: true

        }).start();
    },[]);

    return(
        <KeyboardAvoidingView style={styles.backgroud}>
    <View style={styles.logo}>
      <Image
      source={require('./img/logo.png')}
      />
       </View>



       {/* Inputs com animacao */}
      <Animated.View 
      style={[
        styles.container,
            {
                transform: 
                [
                    {translateY: offset.y }
                ]
            }
        ]} 
      >
        <TextInput 
        style={styles.input}
        placeholder='Email'
        autoCorrect={false}
        onChangeText={()=> {}}
        />
         <TextInput 
        style={styles.input}
        placeholder='Password'
        autoCorrect={false}
        onChangeText={()=> {}}
        
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>
            Acessar
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnSubmitTwo}>
          <Text style={styles.submitText}>
            Criar conta Gratuita
          </Text>
        </TouchableOpacity>
      </Animated.View>
   
   </KeyboardAvoidingView>
    )
}




const styles = StyleSheet.create({
    backgroud: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1C1C1C'
    },
    logo: {
      flex: 1,
    justifyContent: 'center'
    },
    container: {
     
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%'
  
  
    },
    input: {
      backgroundColor: '#4F4F4F',
      width: '80%',
      height: Dimensions.get('window').height * 0.05,
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10
      
    },
    btnSubmit: {
      backgroundColor: '#04f46b',
      width: '80%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 5
    },
    submitText: {
      color: '#fff',
      fontSize: 15
    },
    btnSubmitTwo: {
      
      width: '60%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 5
    }
  
  
  });
  
