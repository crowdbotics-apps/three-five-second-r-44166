import React, { useState } from 'react';
import { SafeAreaView, View, Text, Switch, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Notifications</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Push notification</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Email notifications</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>SMS notifications</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Set theme</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Who can message me</Text>
        <Button title="Everyone" onPress={() => {}} />
        <Button title="Same region" onPress={() => {}} />
        <Button title="Same base" onPress={() => {}} />
        <Button title="No one" onPress={() => {}} />
      </View>
      <View style={styles.section}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Privacy policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Support/ Send Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Delete account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  section: {
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100
  },
  buttonText: {
    color: '#007BFF',
    fontSize: 16,
    marginBottom: 10
  }
});
export default SettingsScreen;