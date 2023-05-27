import { Text,View,StyleSheet } from "react-native";
const GuessLogItem = ({roundNumber,guess})=>{
    return( 
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess:{guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
        borderColor:'#ddb52f',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:'ddb52g',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3
    }
})
export default  GuessLogItem;