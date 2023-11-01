import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, Picker, ScrollView } from 'react-native';

const App = () => {
  const [region, setRegion] = useState('');
  const [base, setBase] = useState('');
  const [reason, setReason] = useState('');
  const [physician, setPhysician] = useState('');
  const regions = ['Region 1', 'Region 2', 'Region 3'];
  const bases = ['Base 1', 'Base 2', 'Base 3'];
  const reasons = ['Reason 1', 'Reason 2', 'Reason 3'];
  return <SafeAreaView style={_styles.wwveFXrt}>
      <ScrollView style={_styles.ajUPjBpX}>
        <Text style={_styles.whkioNsL}>Tricare Region for Insurance Coverage</Text>

        <Text>Select your Tricare region:</Text>
        <Picker selectedValue={region} onValueChange={itemValue => setRegion(itemValue)}>
          {regions.map((region, index) => <Picker.Item key={index} label={region} value={region} />)}
        </Picker>

        <Text>Select your base:</Text>
        <Picker selectedValue={base} onValueChange={itemValue => setBase(itemValue)}>
          {bases.map((base, index) => <Picker.Item key={index} label={base} value={base} />)}
        </Picker>

        <Text>Why are you here:</Text>
        <Picker selectedValue={reason} onValueChange={itemValue => setReason(itemValue)}>
          {reasons.map((reason, index) => <Picker.Item key={index} label={reason} value={reason} />)}
        </Picker>

        <Text>Search for your physician:</Text>
        <TextInput style={_styles.oYxjPfda} onChangeText={text => setPhysician(text)} value={physician} />

        <View style={_styles.eXkxivpI}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.PQJgLIkX} />
          <View>
            <Text>{physician}</Text>
            <Text>email@example.com</Text>
          </View>
        </View>

        <Button title="Connect" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  wwveFXrt: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ajUPjBpX: {
    padding: 20
  },
  whkioNsL: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  oYxjPfda: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  eXkxivpI: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  PQJgLIkX: {
    width: 50,
    height: 50,
    marginRight: 10
  }
});