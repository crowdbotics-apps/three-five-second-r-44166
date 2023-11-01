import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, Linking, Button, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { Audio } from 'expo-av';

const ScreenComponent = () => {
  const soundObject = new Audio.Sound();
  const video = React.useRef(null);

  const playSound = async () => {
    try {
      await soundObject.loadAsync({
        uri: 'https://tinyurl.com/42evm3m3'
      });
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.category}>Category</Text>
        <Text style={styles.type}>Type</Text>
        <Text style={styles.author}>Author/Publisher</Text>
        <Text style={styles.date}>Date of Publication</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Button title="Link" onPress={() => Linking.openURL('https://tinyurl.com/42evm3m3')} />
        <Text style={styles.description}>Textual Description</Text>
        <Button title="Play Audio" onPress={playSound} />
        <Video ref={video} style={styles.video} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} useNativeControls resizeMode="contain" isLooping />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  category: {
    fontSize: 20,
    marginBottom: 10
  },
  type: {
    fontSize: 20,
    marginBottom: 10
  },
  author: {
    fontSize: 20,
    marginBottom: 10
  },
  date: {
    fontSize: 20,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 200
  }
});
export default ScreenComponent;