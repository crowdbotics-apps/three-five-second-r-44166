import React from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet, TouchableOpacity, DatePickerIOS } from 'react-native';

class SleepScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenStartDate: new Date(),
      chosenEndDate: new Date()
    };
  }

  setStartDate = newDate => {
    this.setState({
      chosenStartDate: newDate
    });
  };
  setEndDate = newDate => {
    this.setState({
      chosenEndDate: newDate
    });
  };

  render() {
    return <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Sleep Tracking</Text>
        <Button title="Upload CSV file" onPress={() => {}} />
        <Button title="Export Sleep data" onPress={() => {}} />
        <Text style={styles.subtitle}>Manually Log Sleep</Text>
        <Text style={styles.text}>Sleep Start Time:</Text>
        <DatePickerIOS date={this.state.chosenStartDate} onDateChange={this.setStartDate} />
        <Text style={styles.text}>Sleep End Time:</Text>
        <DatePickerIOS date={this.state.chosenEndDate} onDateChange={this.setEndDate} />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Log Sleep</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Sleep Patterns:</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.subtitle}>Last Night's Sleep:</Text>
        <Text style={styles.text}>Total Sleep Time: 8 hours</Text>
        <Text style={styles.text}>Deep Sleep Time: 3 hours</Text>
        <Text style={styles.text}>Light Sleep Time: 4 hours</Text>
        <Text style={styles.text}>Awake Time: 1 hour</Text>
      </SafeAreaView>;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginTop: 10
  },
  button: {
    backgroundColor: '#4B9ACF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20
  }
});
export default SleepScreen;