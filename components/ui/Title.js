import React  from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants';

function Title({ children }) {
  return (
    <Text style={styles.title}>
        {children}  
    </Text>

  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    marginTop: 15,
    marginHorizontal: 15,
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',

}
});

export default Title