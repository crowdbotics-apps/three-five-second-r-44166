import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, Switch, StyleSheet } from 'react-native';

const PrivacyScreen = () => {
  const [permissions, setPermissions] = useState({
    location: false,
    camera: false,
    microphone: false,
    contacts: false
  });

  const toggleSwitch = permission => {
    setPermissions({ ...permissions,
      [permission]: !permissions[permission]
    });
  };

  return <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={() => {}} />
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Privacy Settings</Text>
      <View style={styles.permissionContainer}>
        {Object.keys(permissions).map(permission => <View style={styles.permission} key={permission}>
            <Text style={styles.permissionText}>{permission}</Text>
            <Switch trackColor={{
          false: '#767577',
          true: '#81b0ff'
        }} thumbColor={permissions[permission] ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={() => toggleSwitch(permission)} value={permissions[permission]} />
          </View>)}
      </View>
      <Text style={styles.policy}>Privacy Policy</Text>
      <Text style={styles.policyDetails}>Details about Privacy Policy will be provided by the Client</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  permissionContainer: {
    width: '80%',
    marginBottom: 20
  },
  permission: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  permissionText: {
    fontSize: 18
  },
  policy: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  policyDetails: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  }
});
export default PrivacyScreen;