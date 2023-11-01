import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}>
          <Text>Emergency Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.physicianDetails}>
        <Text>Name</Text>
        <Image style={styles.profilePicture} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text>Contact Details</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Sobriety Tracker" onPress={() => {}} />
        <Button title="Sleep Tracker" onPress={() => {}} />
        <Button title="CBT Tools" onPress={() => {}} />
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Wellness Resources</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Clinics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Threads</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  icon: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 50
  },
  physicianDetails: {
    alignItems: 'center',
    margin: 20
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  navButton: {
    padding: 10
  }
});
export default ScreenComponent;