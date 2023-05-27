import { Text, View,StyleSheet,SafeAreaView, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;
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
    const [guessArray,setGuessArray] = useState([]);
    useEffect(()=>{
        if(currentGuess===props.userNumber){
            console.log(guessArray.length);
            props.onOver(guessArray.length);
        }
    },[currentGuess,props.userNumber,props.onOver])

    const incrementHandler = (direction)=>{
        if((direction === 'lower' && currentGuess <props.userNumber) || (direction === 'greater' && currentGuess > props.userNumber)){
            Alert.alert("Don't Lie","You know its not true",[{text:'Sorry!',style:'cancel'}])
            return;
        }
        if(direction === 'lower'){
            console.log('inside lower')
            maxBoundary=currentGuess;
        }
        else{
            minBoundary = currentGuess+1;
        }
        //console.log(minBoundary,maxBoundary,currentGuess);
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);

        setCurrentGuess(newRndNumber);
        setGuessArray((prevArray)=>([...prevArray,newRndNumber]));
    }


    const guessRoundListLength = (guessArray.length);
    return(
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View >
                    <PrimaryButton onPress={incrementHandler.bind(this,'greater')}>
                        <Ionicons name="add-sharp" size={24} color="black" />                   
                    </PrimaryButton>
                    <PrimaryButton onPress={incrementHandler.bind(this,'lower')}>
                        <Ionicons name="remove" size={24} color="black" />
                    </PrimaryButton>
                </View>
            </View>
            <View style={styles.listContainer}>
                {<FlatList data={guessArray} renderItem={(itemData)=>
                <GuessLogItem roundNumber = {guessRoundListLength-itemData.index} guess={itemData.item}>{itemData.item}</GuessLogItem>} keyExtractor={(item)=>item}></FlatList>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:40,

    },
    button:{

    },
    listContainer:{
        flex:1,
        padding:16
    }

})
export default GameScreen;