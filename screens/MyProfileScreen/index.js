import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, Picker, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    zip: '',
    state: '',
    country: ''
  });

  const handleSave = () => {
    // Save changes here
    setEditMode(false);
  };

  return <SafeAreaView style={_styles.HqfOMMpo}>
      <ScrollView>
        <View style={_styles.WHuyTfrR}>
          <Image style={_styles.mecLLtrb} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          {isEditMode ? <Button title="Change Photo" onPress={() => {}} /> : null}
        </View>
        <View style={_styles.euCANIeK}>
          {isEditMode ? <TextInput value={name} onChangeText={setName} placeholder="Name" /> : <Text>{name}</Text>}
          {isEditMode ? <TextInput value={username} onChangeText={setUsername} placeholder="Username" /> : <Text>{username}</Text>}
          {isEditMode ? <TextInput value={email} onChangeText={setEmail} placeholder="Email" /> : <Text>{email}</Text>}
          {isEditMode ? <TextInput value={phone} onChangeText={setPhone} placeholder="Phone" /> : <Text>{phone}</Text>}
          {isEditMode ? <TextInput value={bio} onChangeText={setBio} placeholder="Bio" multiline /> : <Text>{bio}</Text>}
          {isEditMode ? <TextInput value={dob} onChangeText={setDob} placeholder="Date of Birth" /> : <Text>{dob}</Text>}
          {isEditMode ? <Picker selectedValue={gender} onValueChange={setGender}>
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Prefer not to say" value="other" />
            </Picker> : <Text>{gender}</Text>}
          {isEditMode ? <View>
              <TextInput value={address.street} onChangeText={text => setAddress({ ...address,
            street: text
          })} placeholder="Street" />
              <TextInput value={address.city} onChangeText={text => setAddress({ ...address,
            city: text
          })} placeholder="City" />
              <TextInput value={address.zip} onChangeText={text => setAddress({ ...address,
            zip: text
          })} placeholder="Zip Code" />
              <TextInput value={address.state} onChangeText={text => setAddress({ ...address,
            state: text
          })} placeholder="State" />
              <TextInput value={address.country} onChangeText={text => setAddress({ ...address,
            country: text
          })} placeholder="Country" />
            </View> : <View>
              <Text>{address.street}</Text>
              <Text>{address.city}</Text>
              <Text>{address.zip}</Text>
              <Text>{address.state}</Text>
              <Text>{address.country}</Text>
            </View>}
          <View style={_styles.HQfzEfXC}>
            {isEditMode ? <Button title="Save" onPress={handleSave} /> : <Button title="Edit" onPress={() => setEditMode(true)} />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ProfileScreen;

const _styles = StyleSheet.create({
  HqfOMMpo: {
    flex: 1,
    backgroundColor: "#fff"
  },
  WHuyTfrR: {
    alignItems: "center",
    padding: 20
  },
  mecLLtrb: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  euCANIeK: {
    padding: 20
  },
  HQfzEfXC: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});