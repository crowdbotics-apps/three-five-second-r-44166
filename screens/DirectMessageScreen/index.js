import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

const ChatScreen = () => {
  const dummyData = [{
    id: 1,
    sender: 'John Doe',
    message: 'Hello there!'
  }, {
    id: 2,
    sender: 'You',
    message: 'Hi, how are you?'
  }, {
    id: 3,
    sender: 'John Doe',
    message: 'I am good, thanks for asking.'
  }];
  return <SafeAreaView style={_styles.xVsWxIji}>
      <View style={_styles.pMUtPTsq}>
        <Button title="Back" onPress={() => {}} />
        <View style={_styles.kkiRcPCS}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.bwiXoyRm} />
          <Text style={_styles.HTnmyDOf}>John Doe</Text>
        </View>
      </View>
      <ScrollView style={_styles.RjhJGulf}>
        {dummyData.map(item => <View key={item.id} style={{
        marginBottom: 10,
        alignSelf: item.sender === 'You' ? 'flex-end' : 'flex-start'
      }}>
            <Text style={_styles.MXWHNZoq}>{item.message}</Text>
          </View>)}
      </ScrollView>
      <View style={_styles.FvhFJahB}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={_styles.IvlqaiYw}>😊</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={_styles.zsHZOCRn}>📷</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={_styles.ZHQEssBa}>📎</Text>
        </TouchableOpacity>
        <TextInput style={_styles.ptGyWRLU} placeholder="Write a message" />
        <Button title="Send" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ChatScreen;

const _styles = StyleSheet.create({
  xVsWxIji: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  pMUtPTsq: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  kkiRcPCS: {
    flexDirection: "row",
    alignItems: "center"
  },
  bwiXoyRm: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  HTnmyDOf: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  RjhJGulf: {
    flex: 1,
    padding: 10
  },
  MXWHNZoq: {
    fontSize: 16,
    fontWeight: "500"
  },
  FvhFJahB: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff"
  },
  IvlqaiYw: {
    marginRight: 10
  },
  zsHZOCRn: {
    marginRight: 10
  },
  ZHQEssBa: {
    marginRight: 10
  },
  ptGyWRLU: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 20
  }
});