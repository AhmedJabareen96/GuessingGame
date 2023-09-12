import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onGameStart }) {
  return (
    <View style={styles.container}>
        <Title> Game Over ! </Title>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/success.png')} style={styles.image}/>
        </View>
        <Text style={styles.summaryText}>You Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> tries to guess the number <Text style={styles.highlight}>{userNumber}</Text> </Text>
       <PrimaryButton onPress={onGameStart}>Start a new game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width:300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    marginHorizontal: 60,
    marginVertical: 60
    
  },
  image: {
    height: '100%',
    height: '100%',
    
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center'

  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500

  }
});


export default GameOverScreen