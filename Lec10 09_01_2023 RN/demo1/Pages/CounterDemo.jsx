import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function CounterDemo(props) {
  const [counter, setCounter] = useState(0);

  const btnAddCounter = () => {
    debugger;
    let num = 7;
    num++;
    console.log(num);
    setCounter(prevC => prevC + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Avi's App!</Text>

      <Button title="second page"
        onPress={() => props.navigation.navigate('SecondPage', { userName: 'avi' })} />
      
      <Button title="tab page"
        onPress={() => props.navigation.navigate('MaterialTabbedPage')} />

      <Button title="add1" onPress={btnAddCounter} />
      <Text style={{ fontSize: 30 }}>counter={counter}</Text>
      <TouchableOpacity onPress={() => console.log('in touchableopacity')}>
        <View style={{ backgroundColor: 'grey', margin: 15, borderRadius: 45, fontSize: 30, padding: 20 }}>
          <Text style={{ fontSize: 30, color: 'red' }}>mashu</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
