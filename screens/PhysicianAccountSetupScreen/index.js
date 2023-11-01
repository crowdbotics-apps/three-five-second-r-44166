import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, Picker, ScrollView } from 'react-native';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedBase, setSelectedBase] = useState('');
  const [bio, setBio] = useState('');
  const [rank, setRank] = useState('');
  const [branch, setBranch] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [yearsOfService, setYearsOfService] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  return <SafeAreaView style={_styles.CbugizUa}>
      <ScrollView>
        <View style={_styles.nsZhqueO}>
          <Text style={_styles.dcmueMWf}>Tricare Region for Insurance Coverage</Text>
          <Picker selectedValue={selectedRegion} onValueChange={itemValue => setSelectedRegion(itemValue)}>
            <Picker.Item label="Region 1" value="region1" />
            <Picker.Item label="Region 2" value="region2" />
          </Picker>

          <Text style={_styles.oRyqPxkB}>Select Your Base</Text>
          <Picker selectedValue={selectedBase} onValueChange={itemValue => setSelectedBase(itemValue)}>
            <Picker.Item label="Base 1" value="base1" />
            <Picker.Item label="Base 2" value="base2" />
          </Picker>

          <TextInput placeholder="Bio" value={bio} onChangeText={setBio} />
          <TextInput placeholder="Rank" value={rank} onChangeText={setRank} />
          <Picker selectedValue={branch} onValueChange={itemValue => setBranch(itemValue)}>
            <Picker.Item label="Branch 1" value="branch1" />
            <Picker.Item label="Branch 2" value="branch2" />
          </Picker>
          <TextInput placeholder="Specialty" value={specialty} onChangeText={setSpecialty} />
          <TextInput placeholder="Years of Service" value={yearsOfService} onChangeText={setYearsOfService} />

          <Text style={_styles.lOqyKIMZ}>Upload Physician Verification Document</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.sBTxaabl} />

          <Text style={_styles.QbVmwjaQ}>Clinic Details</Text>
          <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
          <TextInput placeholder="Location" value={location} onChangeText={setLocation} />
          <TextInput placeholder="Contact Details" value={contact} onChangeText={setContact} />
          <TextInput placeholder="Other Details" value={otherDetails} onChangeText={setOtherDetails} />

          <Button title="Continue" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  CbugizUa: {
    flex: 1,
    backgroundColor: "#fff"
  },
  nsZhqueO: {
    padding: 20
  },
  dcmueMWf: {
    fontSize: 24,
    fontWeight: "bold"
  },
  oRyqPxkB: {
    fontSize: 24,
    fontWeight: "bold"
  },
  lOqyKIMZ: {
    fontSize: 24,
    fontWeight: "bold"
  },
  sBTxaabl: {
    width: 100,
    height: 100
  },
  QbVmwjaQ: {
    fontSize: 24,
    fontWeight: "bold"
  }
});