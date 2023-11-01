import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  sender: 'John Doe',
  message: 'Hello, how are you?',
  attachment: 'https://tinyurl.com/42evm3m3'
} // Add more messages here...
];

const GroupScreen = ({
  navigation
}) => {
  const renderItem = ({
    item
  }) => <View style={_styles.BXFOcycT}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.PLRlMqmF} />
      <View style={_styles.EdVALKeq}>
        <Text style={_styles.BvfecmFx}>{item.sender}</Text>
        <Text>{item.message}</Text>
        <Image source={{
        uri: item.attachment
      }} style={_styles.OuyRlmlE} />
      </View>
    </View>;

  return <SafeAreaView style={_styles.twsgTmSx}>
      <View style={_styles.muxsXNAT}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <TouchableOpacity onPress={() => navigation.navigate('SpecificGroupScreen')}>
          <Text style={_styles.vFrLGPsg}>Group Name</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.ZbdhpAQx} />
        </TouchableOpacity>
      </View>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={_styles.lIBXEqNO}>
        <TextInput placeholder="Write message" style={_styles.XTgmGoLi} />
        <Button title="😀" onPress={() => {}} />
        <Button title="📷" onPress={() => {}} />
        <Button title="📎" onPress={() => {}} />
        <Button title="Send" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default GroupScreen;

const _styles = StyleSheet.create({
  BXFOcycT: {
    flexDirection: "row",
    margin: 10
  },
  PLRlMqmF: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  EdVALKeq: {
    marginLeft: 10
  },
  BvfecmFx: {
    fontSize: 18,
    fontWeight: "bold"
  },
  OuyRlmlE: {
    width: 100,
    height: 100
  },
  twsgTmSx: {
    flex: 1
  },
  muxsXNAT: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  vFrLGPsg: {
    fontSize: 20,
    fontWeight: "bold"
  },
  ZbdhpAQx: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  lIBXEqNO: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  XTgmGoLi: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10
  }
});