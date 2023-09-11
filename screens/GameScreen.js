import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';

const generateRandomNumber = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude){
    return generateRandomNumber(min, max, exclude);
  }
  else {
    return randomNum;
  }
} 

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
      if (currentGuess === userNumber){
        onGameOver();
      }
  }, [currentGuess, userNumber, onGameOver]);



  const nextGuessHandler = (direction) => {
    if(direction === 'lower' && currentGuess < userNumber || direction === 'greater' && currentGuess > userNumber){
      Alert.alert("Don't lie", "You know this is wrong", [{text: 'sorry', style: 'cancel'}]);
      return;
    }

    if(direction === 'lower'){
      maxBoundary = currentGuess;
    }
    else {
      minBoundary = currentGuess + 1;
    }

    const newRandNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandNumber);
  }

  return (
    <View style={styles.screen}> 
        <Title> OPPONENT'S GAME </Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instuctionText}>Higher or lower</InstructionText>
            <View style={styles.buttonsContainer}> 
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                  <Ionicons name="md-add" size={24} color='white'/>  
                </PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}> 
                  <Ionicons name="md-remove" size={24} color='white'/>
                </PrimaryButton>
            </View>
        </Card>
        {/* <View> {LOG ROUNDS} </View> */}
    </View>
  )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonsContainer:{
      flexDirection: 'row',
      
    },
    instuctionText: {
      marginBottom: 12
    }
});

export default GameScreen