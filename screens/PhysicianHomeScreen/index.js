import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
const DATA = Array(10).fill().map((_, i) => ({
  id: `user${i}`,
  name: `User ${i}`,
  image: 'https://tinyurl.com/42evm3m3'
}));

const UserItem = ({
  name,
  image,
  onPress
}) => <TouchableOpacity onPress={onPress} style={_styles.nEYUEmmI}>
    <Image source={{
    uri: image
  }} style={_styles.CVIKdavt} />
    <Text style={_styles.tQzOKbAu}>{name}</Text>
  </TouchableOpacity>;

const Screen = ({
  navigation
}) => {
  const handleUserPress = id => {
    navigation.navigate('UserProfile', {
      userId: id
    });
  };

  return <SafeAreaView style={_styles.hxbSvrfH}>
      <View style={_styles.hKxZArQl}>
        <Text style={_styles.ChcEPFWY}>Settings</Text>
        <Text style={_styles.QeQPLVXd}>Notifications</Text>
      </View>
      <TextInput placeholder="Search for users/physicians" style={_styles.heWZvmyC} />
      <FlatList data={DATA} keyExtractor={item => item.id} renderItem={({
      item
    }) => <UserItem name={item.name} image={item.image} onPress={() => handleUserPress(item.id)} />} />
      <View style={_styles.lgnNMWwz}>
        <Text>Home</Text>
        <Text>Chat</Text>
        <Text>Appointments</Text>
        <Text>Threads</Text>
        <Text>Clinics</Text>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>;
};

export default Screen;

const _styles = StyleSheet.create({
  nEYUEmmI: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  CVIKdavt: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  tQzOKbAu: {
    marginLeft: 10
  },
  hxbSvrfH: {
    flex: 1
  },
  hKxZArQl: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  ChcEPFWY: {
    fontSize: 24,
    fontWeight: "bold"
  },
  QeQPLVXd: {
    fontSize: 24,
    fontWeight: "bold"
  },
  heWZvmyC: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0"
  },
  lgnNMWwz: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});