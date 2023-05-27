import { Text, View,StyleSheet } from "react-native";
const NumberContainer = (children) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'#ddb52f',
        padding:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        fontSize:36,
        fontWeight:'bold',
        color:'#ddb52f'
    }
})
export default NumberContainer;