import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function App() {
  const [firstNumber, setfirstNumber] = React.useState(0);
  const [secondNumber, setsecondNumber] = React.useState(0);
  const [answer, setAnswer] = React.useState(firstNumber + secondNumber);

  const buttonPlus = () => {
    const first=parseInt(firstNumber);
    const second=parseInt(secondNumber);
    const sum=first + second;
    setAnswer(sum);
  }

  const buttonMinus = () => {
    const sum=firstNumber - secondNumber
    setAnswer(sum);
  }

  

  return (
      <View style={styles.container}>
        <View>
          <Text>
            {'Result: '+ answer}
          </Text>
        </View>
        <View>
        
        <TextInput
          style={{width: 200, borderColor: 'black', borderWidth: 1,  }}
          keyboardType={'numeric'}
          value={firstNumber}
          onChangeText={number => setfirstNumber(number)}
        />
        <TextInput
          style={{width: 200, borderColor: 'black', borderWidth: 1 }}
          keyboardType={'numeric'}
          value={secondNumber}
          onChangeText={number => setsecondNumber(number)}
        />
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button color='pink' onPress={buttonPlus} title="+"/>
              </View>
              <View>
              <Button color='pink' onPress={buttonMinus} title="-"/>
              </View>
          <StatusBar style="auto" />
          </View>
        </View>
      </View>

  );
  }

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    justifyContent: 'center', 
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    margin: 10,
  },

  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  button: {
    marginRight: 10,
  },


});
