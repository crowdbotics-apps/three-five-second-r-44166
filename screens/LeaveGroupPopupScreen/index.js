import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LeaveGroupScreen = () => {
  const [reason, setReason] = useState('');
  const reasons = ['Reason 1', 'Reason 2', 'Reason 3', 'Reason 4'];

  const handleLeave = () => {
    Alert.alert('Notification sent to Physician');
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.groupInfo}>
        <Image style={styles.groupImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.groupName}>Group Name</Text>
      </View>
      <Text style={styles.leaveReasonTitle}>Reason to leave</Text>
      {reasons.map((reason, index) => <Text key={index} style={styles.reasonItem}>
          {reason}
        </Text>)}
      <TextInput style={styles.input} onChangeText={setReason} value={reason} placeholder="Other" />
      <Button title="Leave" onPress={handleLeave} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  groupInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  groupImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  leaveReasonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  reasonItem: {
    fontSize: 14,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default LeaveGroupScreen;