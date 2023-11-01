
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const ClinicScreen = () => {
  const physician = {
    name: 'Dr. John Doe',
    profilePicture: 'https://tinyurl.com/42evm3m3',
    bio: 'Experienced physician with a demonstrated history of working in the medical practice industry.',
    rank: 'Major',
    branch: 'Army',
    specialty: 'Cardiology',
    yearsOfService: 10,
  };

  const clinic = {
    title: 'Health Clinic',
    location: '123 Main St, Anytown, USA',
    contact: '123-456-7890',
    details: 'Open Monday through Friday, 9am to 5pm',
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <View style={styles.physicianContainer}>
        <Image style={styles.profilePicture} source={{ uri: physician.profilePicture }} />
        <Text style={styles.name}>{physician.name}</Text>
        <Text style={styles.bio}>{physician.bio}</Text>
        <Text style={styles.rank}>{physician.rank}</Text>
        <Text style={styles.branch}>{physician.branch}</Text>
        <Text style={styles.specialty}>{physician.specialty}</Text>
        <Text style={styles.yearsOfService}>{`Years of Service: ${physician.yearsOfService}`}</Text>
      </View>
      <View style={styles.clinicContainer}>
        <Text style={styles.title}>{clinic.title}</Text>
        <Text style={styles.location}>{clinic.location}</Text>
        <Text style={styles.contact}>{clinic.contact}</Text>
        <Text style={styles.details}>{clinic.details}</Text>
      </View>
      <Button title="Share" onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
  physicianContainer: {
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontStyle: 'italic',
  },
  rank: {
    fontWeight: 'bold',
  },
  branch: {
    fontWeight: 'bold',
  },
  specialty: {
    fontWeight: 'bold',
  },
  yearsOfService: {
    fontWeight: 'bold',
  },
  clinicContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    fontStyle: 'italic',
  },
  contact: {
    fontStyle: 'italic',
  },
  details: {
    fontStyle: 'italic',
  },
});

export default ClinicScreen;
