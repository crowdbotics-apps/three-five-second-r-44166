import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';

const TokenScreen = () => {
  const [token, setToken] = useState('');

  const submitToken = () => {
    Alert.alert('Token submitted', `You entered: ${token}`);
  };

  const resendToken = () => {
    Alert.alert('Token re-sent', 'Please check your email');
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Enter token</Text>
      <TextInput style={styles.input} onChangeText={setToken} value={token} keyboardType="numeric" placeholder="Enter your token here" />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={submitToken} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Re-send token" onPress={resendToken} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => setToken('')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 10
  }
});
export default TokenScreen;