import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Notification 1',
  summary: 'This is notification 1',
  read: false
}, {
  id: '2',
  title: 'Notification 2',
  summary: 'This is notification 2',
  read: false
}, {
  id: '3',
  title: 'Notification 3',
  summary: 'This is notification 3',
  read: true
} // Add more notifications as needed
];

const NotificationScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>
        {!item.read && <Button title="Mark as read" onPress={() => {}} />}
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  summary: {
    fontSize: 14,
    color: '#757575'
  }
});
export default NotificationScreen;