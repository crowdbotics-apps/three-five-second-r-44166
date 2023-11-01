import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const GroupScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create a Group</Text>
      <TextInput style={styles.input} placeholder="Title" />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.uploadText}>Upload group image</Text>
      </View>
      <TextInput style={styles.input} placeholder="Group category" />
      <TextInput style={styles.input} placeholder="Group description" multiline />
      <Text style={styles.addMembers}>Add members</Text>
      <TextInput style={styles.input} placeholder="Search for users and send requests to join" />
      <Button title="Create the group" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  uploadText: {
    color: '#007BFF'
  },
  addMembers: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
export default GroupScreen;