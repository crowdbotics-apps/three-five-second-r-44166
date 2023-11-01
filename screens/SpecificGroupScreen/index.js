import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
const dummyData = {
  title: 'Group Title',
  category: 'Group Category',
  description: 'Group Description',
  members: [{
    id: '1',
    name: 'Member 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'Member 2',
    image: 'https://tinyurl.com/42evm3m3'
  } // add more members as needed
  ]
};

const GroupScreen = () => {
  const {
    title,
    category,
    description,
    members
  } = dummyData;

  const handleRemove = member => {// handle remove member
  };

  const handleAdd = () => {// handle add member
  };

  const handleLeave = () => {
    Alert.alert("Leave Group", "Are you sure you want to leave this group?", [{
      text: "Cancel",
      style: "cancel"
    }, {
      text: "OK",
      onPress: () => console.log("OK Pressed")
    }]);
  };

  return <SafeAreaView style={_styles.tZnXNMgK}>
      <View style={_styles.dTxDHYvH}>
        <Text style={_styles.NskGqDSz}>{title}</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.lVBclsZK} />
        <Text style={_styles.apQAoqoB}>{category}</Text>
        <Text style={_styles.vHfBTCjd}>{description}</Text>
        <FlatList data={members} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.sjpnuTpp}>
              <Image source={{
          uri: item.image
        }} style={_styles.vBoCiLjP} />
              <Text style={_styles.YqTBFhne}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleRemove(item)} style={_styles.wDZvOIBQ}>
                <Text style={_styles.BlqszAHp}>Remove</Text>
              </TouchableOpacity>
            </View>} />
        <Button title="Add Members" onPress={handleAdd} />
        <TextInput placeholder="Search for users" style={_styles.yepfdLKd} />
        <Button title="Leave" onPress={handleLeave} color="red" />
      </View>
    </SafeAreaView>;
};

export default GroupScreen;

const _styles = StyleSheet.create({
  tZnXNMgK: {
    flex: 1,
    backgroundColor: "#fff"
  },
  dTxDHYvH: {
    padding: 20
  },
  NskGqDSz: {
    fontSize: 24,
    fontWeight: "bold"
  },
  lVBclsZK: {
    width: "100%",
    height: 200
  },
  apQAoqoB: {
    fontSize: 18,
    fontWeight: "bold"
  },
  vHfBTCjd: {
    fontSize: 16
  },
  sjpnuTpp: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  vBoCiLjP: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  YqTBFhne: {
    marginLeft: 10
  },
  wDZvOIBQ: {
    marginLeft: "auto"
  },
  BlqszAHp: {
    color: "red"
  },
  yepfdLKd: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  }
});