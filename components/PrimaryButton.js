import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'

function PrimaryButton(props) {

const pressButtonHandler = () => {
    console.log("Pressed!")
}

// To enable effect on ios
// <Pressable style={({pressed}) => {pressed ? [styles.containerInner, styles.pressed] : styles.containerInner} } onPress={pressButtonHandler} android_ripple={{color: "#640233"}}></Pressable>
  
return (
    <View style={styles.containerOutter}>
    <Pressable style={styles.containerInner} onPress={pressButtonHandler} android_ripple={{color: "#640233"}}>
        <Text style={styles.buttonText}>{props.children}</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    containerOutter: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    containerInner: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});

export default PrimaryButton