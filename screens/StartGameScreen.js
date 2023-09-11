import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const inputHandler = (input) => {
        setEnteredNumber(input)
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosedNumber = parseInt(enteredNumber);
        if(isNaN(chosedNumber) || chosedNumber <= 0 || chosedNumber > 99){
                Alert.alert('Invalid number!',
                             'Value have to be between 1 and 99',
                             [{text: "okay", style: 'destructive', onPress: resetInputHandler}]);
                return;
        };
        onPickNumber(chosedNumber);
    }

  return (
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter a number: </InstructionText>
            <TextInput 
            style={styles.textInput} 
            maxLength={2} 
            keyboardType='number-pad'
            value={enteredNumber}
            onChangeText={inputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View>
                    <PrimaryButton style={styles.buttonContainer} onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View>
                    <PrimaryButton style={styles.buttonContainer} onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
    },
    textInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        
    },
    buttonContainer: {
        flex: 1,
       
    }
});

export default StartGameScreen