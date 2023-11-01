import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
const DATA = [{
  id: '1',
  title: 'Exercise 1',
  completionDate: '2021-09-01'
}, {
  id: '2',
  title: 'Exercise 2',
  completionDate: '2021-09-02'
}, {
  id: '3',
  title: 'Exercise 3',
  completionDate: '2021-09-03'
}];

const Item = ({
  title,
  completionDate
}) => <View style={styles.item}>
    <Image style={styles.tinyLogo} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{completionDate}</Text>
    </View>
    <Button title="Play" onPress={() => {}} />
  </View>;

const ExerciseScreen = () => {
  const renderItem = ({
    item
  }) => <Item title={item.title} completionDate={item.completionDate} />;

  return <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 14,
    color: '#888'
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  }
});
export default ExerciseScreen;