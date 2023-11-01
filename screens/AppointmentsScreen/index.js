import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
const appointments = [{
  id: '1',
  title: 'Meeting with John',
  description: 'Discuss project details',
  date: '2021-09-20',
  time: '10:00 AM',
  scheduledBy: 'John Doe'
}, {
  id: '2',
  title: 'Call with Sarah',
  description: 'Project update',
  date: '2021-09-21',
  time: '11:00 AM',
  scheduledBy: 'Sarah Smith'
} // Add more appointments as needed
];

const CalendarScreen = ({
  navigation
}) => {
  const [availability, setAvailability] = useState([]);

  const handleAvailability = timeSlot => {
    setAvailability([...availability, timeSlot]);
  };

  const renderItem = ({
    item
  }) => <TouchableOpacity onPress={() => navigation.navigate('UserProfile', {
    username: item.scheduledBy
  })}>
      <View style={_styles.qQrlxSsn}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.NiZpnXWg} />
        <View style={_styles.KKGHebbM}>
          <Text style={_styles.OzSSDnUD}>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text>{item.date} at {item.time}</Text>
          <Text>Scheduled by {item.scheduledBy}</Text>
        </View>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.VaYrhUqU}>
      <View style={_styles.eDcrLLKe}>
        <Text style={_styles.rhHkbbzS}>Appointments</Text>
        <FlatList data={appointments} renderItem={renderItem} keyExtractor={item => item.id} />
        <View style={_styles.icQHRmKZ}>
          <Text style={_styles.uQToacEA}>Set Availability</Text>
          <View style={_styles.iYvdSuaP}>
            {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map((timeSlot, index) => <TouchableOpacity key={index} onPress={() => handleAvailability(timeSlot)} style={{
            backgroundColor: availability.includes(timeSlot) ? 'green' : '#ccc',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
            marginBottom: 10
          }}>
                <Text style={_styles.WeZKGYKX}>{timeSlot}</Text>
              </TouchableOpacity>)}
          </View>
        </View>
      </View>
    </SafeAreaView>;
};

export default CalendarScreen;

const _styles = StyleSheet.create({
  qQrlxSsn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  NiZpnXWg: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  KKGHebbM: {
    marginLeft: 10
  },
  OzSSDnUD: {
    fontSize: 18
  },
  VaYrhUqU: {
    flex: 1
  },
  eDcrLLKe: {
    flex: 1,
    padding: 20
  },
  rhHkbbzS: {
    fontSize: 24,
    fontWeight: "bold"
  },
  icQHRmKZ: {
    marginTop: 20
  },
  uQToacEA: {
    fontSize: 24,
    fontWeight: "bold"
  },
  iYvdSuaP: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  },
  WeZKGYKX: {
    color: "#fff"
  }
});