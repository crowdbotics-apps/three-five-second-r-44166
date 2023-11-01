import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Thread 1',
  picture: 'https://tinyurl.com/42evm3m3',
  type: 'Type 1',
  category: 'Category 1',
  description: 'This is a short description for Thread 1',
  members: 100
} // Add more dummy data here
];

const ThreadScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>List of threads I've joined</Text>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <Button title="Filter" onPress={() => {}} />
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.threadCard}>
            <Image style={styles.threadImage} source={{
        uri: item.picture
      }} />
            <Text style={styles.threadTitle}>{item.title}</Text>
            <Text style={styles.threadTypeCategory}>{`${item.type} and ${item.category}`}</Text>
            <Text style={styles.threadDescription}>{item.description}</Text>
            <Text style={styles.threadMembers}>{`Number of Members: ${item.members}`}</Text>
            <Button title="Join" onPress={() => {}} />
          </View>} />
      <Button title="Create a new thread" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10
  },
  threadCard: {
    marginBottom: 20
  },
  threadImage: {
    width: '100%',
    height: 200
  },
  threadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  threadTypeCategory: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5
  },
  threadDescription: {
    fontSize: 14,
    marginTop: 5
  },
  threadMembers: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5
  }
});
export default ThreadScreen;