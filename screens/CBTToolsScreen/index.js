import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
const exercises = [{
  id: '1',
  title: 'Exercise 1',
  description: 'This is exercise 1'
}, {
  id: '2',
  title: 'Exercise 2',
  description: 'This is exercise 2'
} // Add more exercises as needed
];
const activities = [{
  id: '1',
  title: 'Activity 1',
  description: 'This is activity 1'
}, {
  id: '2',
  title: 'Activity 2',
  description: 'This is activity 2'
} // Add more activities as needed
];

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Exercise Selection</Text>
      <FlatList data={exercises} renderItem={({
      item
    }) => <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Button title="Start Exercise" onPress={() => {}} />
          </View>} keyExtractor={item => item.id} />

      <Text style={styles.title}>Activity Selection</Text>
      <FlatList data={activities} renderItem={({
      item
    }) => <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Button title="Start Activity" onPress={() => {}} />
          </View>} keyExtractor={item => item.id} />

      <View style={styles.progress}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.details}>Number of Exercises Completed: 10</Text>
        <Text style={styles.details}>Number of Activities Completed: 5</Text>
        <Button title="Play Games" onPress={() => {}} />
      </View>
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
    marginVertical: 10
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemDescription: {
    fontSize: 14
  },
  progress: {
    marginTop: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    fontSize: 16,
    marginVertical: 10
  }
});
export default ScreenComponent;