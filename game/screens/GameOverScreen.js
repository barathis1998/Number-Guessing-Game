import { Text, Image, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
const GameOverScreen = (props) => {
    const buttonHandler = ()=>{
        props.onStart();
    }
  return (
    <View style={styles.rootContainer}>
      <Title>Got you bitch!!!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png") } style={styles.image} />
      </View>

      <Text>
        Your phone needed <Text>{props.rounds}</Text> rounds to guess the number<Text>{props.userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={buttonHandler}>Start a New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 60,
    alignContent: "center",
    alignItems: "center",
  },
  imageContainer:{
    height:400,
    width:400,
    borderRadius:200,
    overflow:"hidden",
    borderColor:'black',
    borderWidth:5
  },
  image:{
    width:'100%',
    height:'100%'
  }
});
export default GameOverScreen;
