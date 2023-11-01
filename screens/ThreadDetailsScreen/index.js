import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, TextInput } from 'react-native';
const dummyData = {
  title: 'Thread Title',
  imageUrl: 'https://tinyurl.com/42evm3m3',
  createdBy: 'User Name',
  creationDate: '01/01/2021',
  type: 'Type',
  category: 'Category',
  description: 'This is a description',
  members: [{
    name: 'Member 1',
    imageUrl: 'https://tinyurl.com/42evm3m3'
  }, {
    name: 'Member 2',
    imageUrl: 'https://tinyurl.com/42evm3m3'
  }]
};

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.QccZRvYo}>
      <View style={_styles.hAKRGKpv}>
        <Text style={_styles.AjtKCAUr}>{dummyData.title}</Text>
        <Image source={{
        uri: dummyData.imageUrl
      }} style={_styles.fjZyZsja} />
        <Text style={_styles.lzzcLBfp}>Created by: {dummyData.createdBy}</Text>
        <Text style={_styles.NWKsAgLY}>Date: {dummyData.creationDate}</Text>
        <Text style={_styles.jdhunuoO}>Type: {dummyData.type}</Text>
        <Text style={_styles.rEgAEuYR}>Category: {dummyData.category}</Text>
        <Text style={_styles.DEmQnPSu}>Description: {dummyData.description}</Text>
        <Text style={_styles.eYmiCykn}>Members:</Text>
        <FlatList data={dummyData.members} keyExtractor={item => item.name} renderItem={({
        item
      }) => <View style={_styles.SOMqbMkS}>
              <Image source={{
          uri: item.imageUrl
        }} style={_styles.UtwutVSI} />
              <Text style={_styles.lKAZVjXS}>{item.name}</Text>
              <Button title="Remove" onPress={() => {}} />
            </View>} />
        <Button title="Leave" onPress={() => {}} />
        <Text style={_styles.JJAwoJhV}>Invite new members:</Text>
        <TextInput style={_styles.zDbZMDwR} placeholder="Search for users and invite" />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  QccZRvYo: {
    flex: 1,
    backgroundColor: "#fff"
  },
  hAKRGKpv: {
    padding: 20
  },
  AjtKCAUr: {
    fontSize: 24,
    fontWeight: "bold"
  },
  fjZyZsja: {
    width: "100%",
    height: 200
  },
  lzzcLBfp: {
    fontSize: 18,
    fontWeight: "bold"
  },
  NWKsAgLY: {
    fontSize: 18
  },
  jdhunuoO: {
    fontSize: 18
  },
  rEgAEuYR: {
    fontSize: 18
  },
  DEmQnPSu: {
    fontSize: 18
  },
  eYmiCykn: {
    fontSize: 18,
    fontWeight: "bold"
  },
  SOMqbMkS: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  UtwutVSI: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  lKAZVjXS: {
    marginLeft: 10
  },
  JJAwoJhV: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  zDbZMDwR: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  }
});