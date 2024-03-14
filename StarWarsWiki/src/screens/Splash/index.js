import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Logo } from '../../components';

export const Splash = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>StarWars - Wiki</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
