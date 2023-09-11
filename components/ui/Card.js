import React  from 'react'
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants';

function Card({ children }) {
  return (
    <View style={styles.card}>
    {children}
    </View>
  )
}


const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        
    },
});

export default Card