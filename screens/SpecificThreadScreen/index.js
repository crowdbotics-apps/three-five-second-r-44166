import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  sender: 'John Doe',
  message: 'Hello, how are you?',
  attachment: 'https://tinyurl.com/42evm3m3'
} // Add more messages here...
];

const ThreadScreen = ({
  navigation
}) => {
  return <SafeAreaView style={_styles.NcfNtDzT}>
      <View style={_styles.oqdlIjxN}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <View style={_styles.XQuyEXeb}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.FFKfxYDE} />
          <Text style={_styles.qttQmTNh}>Thread Name</Text>
        </View>
        <Button title="Details" onPress={() => navigation.navigate('ThreadDetailsScreen')} />
      </View>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.gpqtxYYB}>
            <View style={_styles.gnHgVRhy}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.RCxRfooY} />
              <Text style={_styles.YosEfoot}>{item.sender}</Text>
            </View>
            <Text>{item.message}</Text>
            <Image source={{
        uri: item.attachment
      }} style={_styles.DquXujeg} />
          </View>} />
      <View style={_styles.ZGwtedrP}>
        <TextInput style={_styles.wUnNBmwE} placeholder="Write message" />
        <Button title="Emoji" onPress={() => {}} />
        <Button title="Photo/Video" onPress={() => {}} />
        <Button title="Document" onPress={() => {}} />
        <Button title="Send" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ThreadScreen;

const _styles = StyleSheet.create({
  NcfNtDzT: {
    flex: 1,
    backgroundColor: "#fff"
  },
  oqdlIjxN: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  XQuyEXeb: {
    flexDirection: "row",
    alignItems: "center"
  },
  FFKfxYDE: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  qttQmTNh: {
    marginLeft: 10
  },
  gpqtxYYB: {
    padding: 10
  },
  gnHgVRhy: {
    flexDirection: "row",
    alignItems: "center"
  },
  RCxRfooY: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  YosEfoot: {
    marginLeft: 10
  },
  DquXujeg: {
    width: "100%",
    height: 200,
    marginTop: 10
  },
  ZGwtedrP: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  wUnNBmwE: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10
  }
});