import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
export default function App() {
  const [userNumber, setUserNumber] = useState();


  const pickedNumberHandler = (number)=>{
    console.log('inside picked')
    setUserNumber(number);
  }
  let screen = <StartGameScreen onConfirm={pickedNumberHandler}/>

  if (userNumber){
    screen=<GameScreen userNumber={userNumber}/>
  }

  return (
    <><StatusBar style="auto" />
    <LinearGradient colors={['#4e0329','#ddb52g']}  style={styles.root}>
      <ImageBackground source={require('../game/assets/background.png')} resizeMode='cover' style={styles.root}>
        <SafeAreaView>
      {screen}
      </SafeAreaView>
      </ImageBackground>

    </LinearGradient></>
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#ddb52f',
    
  }
})


