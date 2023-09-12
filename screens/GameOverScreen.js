import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
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

const deviceWeidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: deviceWeidth < 380 ? 150 : 300,
    height: deviceWeidth < 380 ? 150 : 300,
    borderRadius: deviceWeidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
    
  },
  image: {
    height: '100%',
    height: '100%',
    
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,

  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500

  }
});


export default GameOverScreen