import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, Picker, CheckBox } from 'react-native';

const AccountSetupScreen = ({
  navigation
}) => {
  const [accountType, setAccountType] = useState('');
  const [fullName, setFullName] = useState('');
  const [govEmail, setGovEmail] = useState('');
  const [secEmail, setSecEmail] = useState('');
  const [useSecEmail, setUseSecEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [militaryAffiliation, setMilitaryAffiliation] = useState('');

  const handleContinue = () => {
    if (accountType === 'General user') {
      navigation.navigate('UserAccountSetup');
    } else if (accountType === 'Physician') {
      navigation.navigate('PhysicianAccountSetup');
    }
  };

  return <SafeAreaView style={_styles.JMCqxusQ}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.yPtJRTyU} />
      <Text style={_styles.srdNSIej}>App Name</Text>
      <Picker selectedValue={accountType} onValueChange={itemValue => setAccountType(itemValue)}>
        <Picker.Item label="General user" value="General user" />
        <Picker.Item label="Physician" value="Physician" />
      </Picker>
      <TextInput placeholder="Full name" value={fullName} onChangeText={setFullName} />
      <Button title="Upload profile picture" onPress={() => {}} />
      <TextInput placeholder="Gov email" value={govEmail} onChangeText={setGovEmail} />
      <TextInput placeholder="Secondary email" value={secEmail} onChangeText={setSecEmail} />
      <View style={_styles.JkCWjnac}>
        <CheckBox value={useSecEmail} onValueChange={setUseSecEmail} />
        <Text>Use secondary email as default</Text>
      </View>
      <TextInput placeholder="Phone number" value={phoneNumber} onChangeText={setPhoneNumber} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} />
      <Picker selectedValue={militaryAffiliation} onValueChange={itemValue => setMilitaryAffiliation(itemValue)}>
        <Picker.Item label="None" value="None" />
        <Picker.Item label="Army" value="Army" />
        <Picker.Item label="Navy" value="Navy" />
        <Picker.Item label="Air Force" value="Air Force" />
        <Picker.Item label="Marines" value="Marines" />
        <Picker.Item label="Coast Guard" value="Coast Guard" />
      </Picker>
      <Button title="Continue" onPress={handleContinue} />
    </SafeAreaView>;
};

export default AccountSetupScreen;

const _styles = StyleSheet.create({
  JMCqxusQ: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  yPtJRTyU: {
    width: 100,
    height: 100
  },
  srdNSIej: {
    fontSize: 24,
    fontWeight: "bold"
  },
  JkCWjnac: {
    flexDirection: "row",
    alignItems: "center"
  }
});