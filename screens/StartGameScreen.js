import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const {height, width} = useWindowDimensions();
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


    const marginTopDistance = height < 400 ? 30 : 50;
  return (
    <ScrollView style={styles.avoidKeyboard}>
    <KeyboardAvoidingView style={styles.avoidKeyboard} behavior='position'>
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    avoidKeyboard: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 400 ? 30 : 50,
        alignItems: 'center',
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
        
    },
    buttonContainer: {
        flex: 1,
       
    }
});

export default StartGameScreen