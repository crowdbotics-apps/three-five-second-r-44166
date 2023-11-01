
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

const ChatScreen = () => {
  const dummyData = [
    { id: 1, sender: 'John Doe', message: 'Hello there!' },
    { id: 2, sender: 'You', message: 'Hi, how are you?' },
    { id: 3, sender: 'John Doe', message: 'I am good, thanks for asking.' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Button title="Back" onPress={() => {}} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: 'https://tinyurl.com/42evm3m3' }} style={{ width: 50, height: 50, borderRadius: 25 }} />
          <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        {dummyData.map((item) => (
          <View key={item.id} style={{ marginBottom: 10, alignSelf: item.sender === 'You' ? 'flex-end' : 'flex-start' }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.message}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff' }}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ marginRight: 10 }}>😊</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ marginRight: 10 }}>📷</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ marginRight: 10 }}>📎</Text>
        </TouchableOpacity>
        <TextInput style={{ flex: 1, marginRight: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 20 }} placeholder="Write a message" />
        <Button title="Send" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
