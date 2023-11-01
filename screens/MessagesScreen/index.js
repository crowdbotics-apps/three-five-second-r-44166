import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList } from 'react-native';
const dummyData = {
  conversations: [{
    id: '1',
    name: 'User1',
    timestamp: '10:00 AM',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'User2',
    timestamp: '09:30 AM',
    image: 'https://tinyurl.com/42evm3m3'
  }],
  groups: [{
    id: '1',
    title: 'Group1',
    timestamp: 'Yesterday',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    title: 'Group2',
    timestamp: '2 days ago',
    image: 'https://tinyurl.com/42evm3m3'
  }]
};

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.GQJTwtZT}>
      <TextInput placeholder="Search" style={_styles.yClbmVCC} />

      <Text style={_styles.BSszZhZn}>My Conversations</Text>
      <FlatList data={dummyData.conversations} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.lnwqmkLt}>
            <Image source={{
        uri: item.image
      }} style={_styles.NuZRkxuq} />
            <View style={_styles.DusysBht}>
              <Text style={_styles.QalyPZJZ}>{item.name}</Text>
              <Text style={_styles.taOBGfCP}>{item.timestamp}</Text>
            </View>
            <View style={_styles.xtqKWSYV}>
              <Button title="Delete" onPress={() => {}} />
              <Button title="Block" onPress={() => {}} />
            </View>
          </View>} />

      <Text style={_styles.FByYHbDe}>Groups</Text>
      <FlatList data={dummyData.groups} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.qisZHjLo}>
            <Image source={{
        uri: item.image
      }} style={_styles.CIYcjbHr} />
            <View style={_styles.zmKpDnix}>
              <Text style={_styles.VKmsHZrL}>{item.title}</Text>
              <Text style={_styles.GisxvJAA}>{item.timestamp}</Text>
            </View>
            <View style={_styles.HxHjDrGX}>
              <Button title="Leave" onPress={() => {}} />
            </View>
          </View>} />

      <Button title="Create New Group" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  GQJTwtZT: {
    flex: 1,
    padding: 20
  },
  yClbmVCC: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  BSszZhZn: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  lnwqmkLt: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  NuZRkxuq: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  DusysBht: {
    marginLeft: 10
  },
  QalyPZJZ: {
    fontSize: 16,
    fontWeight: "bold"
  },
  taOBGfCP: {
    color: "gray"
  },
  xtqKWSYV: {
    marginLeft: "auto"
  },
  FByYHbDe: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  qisZHjLo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  CIYcjbHr: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  zmKpDnix: {
    marginLeft: 10
  },
  VKmsHZrL: {
    fontSize: 16,
    fontWeight: "bold"
  },
  GisxvJAA: {
    color: "gray"
  },
  HxHjDrGX: {
    marginLeft: "auto"
  }
});