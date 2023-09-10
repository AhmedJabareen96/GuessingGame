import { StyleSheet, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#4e0329','#ddb52f']}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage :{
    opacity: 0.25
  }
});