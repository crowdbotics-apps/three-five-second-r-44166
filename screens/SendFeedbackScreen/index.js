import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Subject" value={subject} onChangeText={setSubject} />
        <TextInput style={styles.input} placeholder="Message" value={message} onChangeText={setMessage} multiline />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={() => {}} />
        <Button title="Back" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default ScreenComponent;