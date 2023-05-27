import { Text, View,StyleSheet,SafeAreaView } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
const minBoundary = 1;
const maxBoundary = 100;
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
const GameScreen = (props)=>{
    const initialGuess = generateRandomBetween(1,100,props.userNumber);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);

    const incrementHandler = (direction)=>{

        if((direction === 'lower' && currentGuess <props.userNumber) || (direction === 'greater' && currentGuess > props.userNumber)){
            return;
        }
        if(direction === 'lower'){
            maxBoundary=currentGuess;
        }
        else{
            minBoundary = currentGuess+1;
        }
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);

        setCurrentGuess(newRndNumber);
    }



    return(
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{initialGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View>
                    <PrimaryButton onPress={incrementHandler.bind(this,'higher')}>+</PrimaryButton>
                    <PrimaryButton onPress={incrementHandler.bind(this,'lower')}>-</PrimaryButton>
                </View>
            </View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:40,

    },

})
export default GameScreen;