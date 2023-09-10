import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState("");

    const inputHandler = (input) => {
        setEnteredNumber(input)
    }

    const confirmInputHandler = (input) => {
        console.log("confirm input handler")
    }

  return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        maxLength={2} 
        keyboardType='number-pad'
        value={enteredNumber}
        onChangeText={inputHandler}
        />
        <View style={styles.buttonsContainer}>
        <View>
        <PrimaryButton style={styles.buttonContainer} >Reset</PrimaryButton>
        </View>
        <View>
        <PrimaryButton style={styles.buttonContainer} onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        backgroundColor: "#4e0329",
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    textInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    buttonContainer: {
        flex: 1
    }
});

export default StartGameScreen