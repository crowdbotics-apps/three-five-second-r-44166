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

  return <SafeAreaView style={_styles.uSDTIglc}>
      <View style={_styles.vwkjcBdQ}>
        <Text style={_styles.zQXDPwWM}>{title}</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.ASOgXBBf} />
        <Text style={_styles.HJecRFug}>{category}</Text>
        <Text style={_styles.oqUgdBSf}>{description}</Text>
        <FlatList data={members} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.odWPrjmK}>
              <Image source={{
          uri: item.image
        }} style={_styles.cuMIPbLK} />
              <Text style={_styles.xrrCThCa}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleRemove(item)} style={_styles.rUbsmYrK}>
                <Text style={_styles.DselXIqj}>Remove</Text>
              </TouchableOpacity>
            </View>} />
        <Button title="Add Members" onPress={handleAdd} />
        <TextInput placeholder="Search for users" style={_styles.xJxbHOeu} />
        <Button title="Leave" onPress={handleLeave} color="red" />
      </View>
    </SafeAreaView>;
};

export default GroupScreen;

const _styles = StyleSheet.create({
  uSDTIglc: {
    flex: 1,
    backgroundColor: "#fff"
  },
  vwkjcBdQ: {
    padding: 20
  },
  zQXDPwWM: {
    fontSize: 24,
    fontWeight: "bold"
  },
  ASOgXBBf: {
    width: "100%",
    height: 200
  },
  HJecRFug: {
    fontSize: 18,
    fontWeight: "bold"
  },
  oqUgdBSf: {
    fontSize: 16
  },
  odWPrjmK: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  cuMIPbLK: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  xrrCThCa: {
    marginLeft: 10
  },
  rUbsmYrK: {
    marginLeft: "auto"
  },
  DselXIqj: {
    color: "red"
  },
  xJxbHOeu: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  }
});