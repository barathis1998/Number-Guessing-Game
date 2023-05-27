import { Button, TextInput, View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children,onPress }) => {

    const buttonHandler = ()=>{
        onPress();
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed})=>pressed?[styles.buttonInnerContainer,styles.pressed]:styles.buttonInnerContainer } android_ripple={{color:'#64023'}}
            onPress={buttonHandler}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        margin: 4,
        borderRadius: 8,
        overflow:'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#cccccc',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity:0.75
    }
})

export default PrimaryButton;