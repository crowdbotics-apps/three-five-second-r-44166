import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc et pellentesque.";
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Terms and Conditions</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{termsAndConditions}</Text>
      </View>
      <View style={styles.footer}>
        <Button title="I Agree" onPress={() => {}} />
        <Button title="Back" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  content: {
    flex: 3,
    padding: 20
  },
  text: {
    fontSize: 16
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
export default TermsAndConditionsScreen;