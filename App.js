// importing default libraries of react and react native
import React, {useState} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar, 
  Image,
  Pressable } from 'react-native';

//importing iamges of dice
import DiceOne from './src/images/dice1.png'
import DiceTwo from './src/images/dice2.png'
import DiceThree from './src/images/dice3.png'
import DiceFour from './src/images/dice4.png'
import DiceFive from './src/images/dice5.png'
import DiceSix from './src/images/dice6.png'


const App = () => {

  //define states to handle the images 
  const [uri, SetUri] = useState(DiceTwo);
  const [diceTwo, setDiceTwo] = useState(DiceFive);

  //define method which genrate a random number and print the dice image according to the switch cases
  const onDiceRoll = () => {

    let randomNumber = Math.floor(Math.random() * 6) + 1;

      setDiceTwo(randomNumber + 1);

    switch (randomNumber) {
      case 1:   SetUri(DiceOne);
        break;
      case 2:   SetUri(DiceTwo);
        break;
      case 3:   SetUri(DiceThree);
        break;
      case 4:   SetUri(DiceFour);
        break;
      case 5:   SetUri(DiceFive);
        break;
      case 6:   SetUri(DiceSix);
        break;
    
      default:  SetUri(DiceSix);
        break;
    };
  };

  const onSecondDiceRoll = () => {
   
  }

  return(
    <>
      <StatusBar />
      <View style={styles.container}>
          <TouchableOpacity onPress={onSecondDiceRoll}>
              <Image source={diceTwo} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDiceRoll}>
              <Image source={uri} style={styles.image} />
          </TouchableOpacity>
          <Pressable onPress={onDiceRoll}>
              <Text style={styles.rollToPlay}>Roll Me!</Text>
          </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242B2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
  rollToPlay: {
    fontSize: 25,
    marginTop: 40,
    color: '#CAD5E2',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#E07C24',
    fontWeight: 'bold'
  }
});

export default App;