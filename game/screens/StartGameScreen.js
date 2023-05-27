import { View, TextInput, StyleSheet, Alert ,Text} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Title from '../components/ui/Title';
const StartGameScreen = (props) => {
    const [enteredNumber,setEnteredNumber] = useState('');

    const inputHandler = (enteredText)=>{
        setEnteredNumber(enteredText)
    }
    const confirmHandler = ()=>{
        const number = parseInt(enteredNumber);
        
        if (isNaN(number) || number<=0 ||number>99){
            
            Alert.alert(
                'Invalid Number!',
                'Number should be within 0 to 99',
                [{text:'Okay',style:'destructive',onPress:resetNumber}]
            )
            return;
        }
        props.onConfirm(number);
        }

    const resetNumber = ()=>{
        setEnteredNumber('');
    }

    return (
        <><View style={styles.rootContainer}>
            <Title>Guess the Number</Title>
        <View style={styles.container}>
            <Text style = {styles.text}>Enter a Number</Text>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}
                    value={enteredNumber} onChangeText={inputHandler} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
            </View></>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        marginTop:100,
        alignItems:'center'
    },
    container: {
        marginTop: 100,
        padding: 16,
        backgroundColor: '#7260e3',
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 20,
        shadowColor: 'black',
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    text:{
        color:'#ddb52f',
        fontSize:24,
        fontWeight:'bold'
    }
});

export default StartGameScreen;