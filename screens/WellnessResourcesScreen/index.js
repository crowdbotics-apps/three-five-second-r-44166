import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Picker, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('Mental Health');
  const [selectedType, setSelectedType] = useState('Articles');
  const categories = ['Mental Health', 'Stress Management', 'Nutrition Tips & Advice', 'Emotional Well-being', 'Fitness and Exercise', 'Sleep Improvement', 'Work-Life Balance', 'Resilience Building', 'Relationship Health', 'Self-Care', 'Coping Strategies'];
  const types = ['Articles', 'Videos', 'Podcasts'];
  const resources = [{
    id: '1',
    title: 'Resource 1',
    category: 'Mental Health',
    type: 'Articles',
    author: 'Author 1',
    date: '2021-01-01',
    description: 'Description 1'
  }, {
    id: '2',
    title: 'Resource 2',
    category: 'Stress Management',
    type: 'Videos',
    author: 'Author 2',
    date: '2021-02-02',
    description: 'Description 2'
  } // Add more resources here
  ];
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <Text style={styles.filter}>Filter</Text>
      <Picker selectedValue={selectedCategory} onValueChange={itemValue => setSelectedCategory(itemValue)}>
        {categories.map((category, index) => <Picker.Item key={index} label={category} value={category} />)}
      </Picker>
      <Picker selectedValue={selectedType} onValueChange={itemValue => setSelectedType(itemValue)}>
        {types.map((type, index) => <Picker.Item key={index} label={type} value={type} />)}
      </Picker>
      <FlatList data={resources} renderItem={({
      item
    }) => <TouchableOpacity style={styles.resourceItem}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10
  },
  filter: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  resourceItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  category: {
    fontSize: 16,
    color: 'gray'
  },
  type: {
    fontSize: 16,
    color: 'gray'
  },
  author: {
    fontSize: 16,
    color: 'gray'
  },
  date: {
    fontSize: 16,
    color: 'gray'
  },
  description: {
    fontSize: 16,
    color: 'gray'
  }
});
export default ScreenComponent;