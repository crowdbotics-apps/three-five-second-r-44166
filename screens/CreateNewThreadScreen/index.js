import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Image, Button, Picker, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [user, setUser] = useState('');
  return <SafeAreaView style={_styles.vjygULvi}>
      <ScrollView style={_styles.rXRfVhsu}>
        <Text>Title</Text>
        <TextInput style={_styles.msVLNQpk} onChangeText={text => setTitle(text)} value={title} />

        <Text>Picture</Text>
        <Image style={_styles.AySyIsVQ} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />

        <Text>Type</Text>
        <Picker selectedValue={type} style={_styles.pbSQjfRl} onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
          <Picker.Item label="Type 1" value="type1" />
          <Picker.Item label="Type 2" value="type2" />
        </Picker>

        <Text>Category</Text>
        <Picker selectedValue={category} style={_styles.mkQapsYb} onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
          <Picker.Item label="Category 1" value="cat1" />
          <Picker.Item label="Category 2" value="cat2" />
        </Picker>

        <Text>Description</Text>
        <TextInput style={_styles.fMguBbAL} onChangeText={text => setDescription(text)} value={description} />

        <Text>Invite new members</Text>
        <TextInput style={_styles.nTmPUFHP} onChangeText={text => setUser(text)} value={user} />
        <Button title="Invite" onPress={() => alert('User invited')} />
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  vjygULvi: {
    flex: 1,
    backgroundColor: "#fff"
  },
  rXRfVhsu: {
    padding: 20
  },
  msVLNQpk: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  AySyIsVQ: {
    width: "100%",
    height: 200,
    marginBottom: 20
  },
  pbSQjfRl: {
    height: 50,
    width: "100%",
    marginBottom: 20
  },
  mkQapsYb: {
    height: 50,
    width: "100%",
    marginBottom: 20
  },
  fMguBbAL: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  nTmPUFHP: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  }
});