import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

const ExerciseScreen = () => {
  const [data, setData] = useState(Array.from({
    length: 10
  }, (_, index) => ({
    key: `item-${index}`,
    label: `Option ${index + 1}`
  })));
  const [selected, setSelected] = useState(null);

  const renderItem = ({
    item,
    index,
    drag,
    isActive
  }) => {
    return <TouchableOpacity style={{
      height: 50,
      backgroundColor: isActive ? 'blue' : item.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: isActive ? 10 : null
    }} onLongPress={drag}>
        <Text style={styles.yXUUXvZo}>{item.label}</Text>
      </TouchableOpacity>;
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Exercise</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Text from the selected exercise/activity with a blank space</Text>
        <DraggableFlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => `draggable-item-${item.key}`} onDragEnd={({
        data
      }) => setData(data)} />
      </View>
      <View style={styles.footer}>
        <Button title="Share with physician" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  content: {
    flex: 4,
    padding: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 20
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  yXUUXvZo: {
    color: "white",
    fontWeight: "bold"
  }
});
export default ExerciseScreen;