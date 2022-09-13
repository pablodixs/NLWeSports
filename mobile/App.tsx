import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return(
    <TouchableOpacity>
      <Text style={styles.button}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
} 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Button title='Iniciar'/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
  }
});
