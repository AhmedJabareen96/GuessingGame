import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

import Colors from '../../constants';

function InstructionText({ children, style }) {
  return (
    <View>
        <Text style={[styles.instructionText, style]}>{ children }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    instructionText: {
        fontSize: 25,
        color: Colors.accent500,
        fontWeight: 'bold'
    }
});


export default InstructionText;