import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Image, Button, Picker, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [user, setUser] = useState('');
  return <SafeAreaView style={_styles.hzRfoEGe}>
      <ScrollView style={_styles.MUvmeOMA}>
        <Text>Title</Text>
        <TextInput style={_styles.qdpLRTwM} onChangeText={text => setTitle(text)} value={title} />

        <Text>Picture</Text>
        <Image style={_styles.NEHfRHuZ} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />

        <Text>Type</Text>
        <Picker selectedValue={type} style={_styles.ucvzmMxx} onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
          <Picker.Item label="Type 1" value="type1" />
          <Picker.Item label="Type 2" value="type2" />
        </Picker>

        <Text>Category</Text>
        <Picker selectedValue={category} style={_styles.GnPQTfbB} onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
          <Picker.Item label="Category 1" value="cat1" />
          <Picker.Item label="Category 2" value="cat2" />
        </Picker>

        <Text>Description</Text>
        <TextInput style={_styles.kFHrYUxL} onChangeText={text => setDescription(text)} value={description} />

        <Text>Invite new members</Text>
        <TextInput style={_styles.mOEikMTN} onChangeText={text => setUser(text)} value={user} />
        <Button title="Invite" onPress={() => alert('User invited')} />
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  hzRfoEGe: {
    flex: 1,
    backgroundColor: "#fff"
  },
  MUvmeOMA: {
    padding: 20
  },
  qdpLRTwM: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  NEHfRHuZ: {
    width: "100%",
    height: 200,
    marginBottom: 20
  },
  ucvzmMxx: {
    height: 50,
    width: "100%",
    marginBottom: 20
  },
  GnPQTfbB: {
    height: 50,
    width: "100%",
    marginBottom: 20
  },
  kFHrYUxL: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  mOEikMTN: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  }
});