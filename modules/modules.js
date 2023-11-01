import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, FlatList, TouchableOpacity, CheckBox } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'Dr. John Doe',
  image: 'https://tinyurl.com/42evm3m3',
  checked: false
}, {
  id: '2',
  name: 'Dr. Jane Doe',
  image: 'https://tinyurl.com/42evm3m3',
  checked: false
}, {
  id: '3',
  name: 'Dr. Jim Doe',
  image: 'https://tinyurl.com/42evm3m3',
  checked: false
}];

class App extends React.Component {
  state = {
    data: dummyData
  };
  handleCheck = id => {
    const newData = this.state.data.map(item => {
      if (item.id === id) {
        return { ...item,
          checked: !item.checked
        };
      }

      return item;
    });
    this.setState({
      data: newData
    });
  };

  render() {
    return <SafeAreaView style={_styles.wqAwiMUg}>
        <View style={_styles.RobWheoU}>
          <TextInput style={_styles.NFtnCPOy} placeholder="Search..." />
          <FlatList data={this.state.data} keyExtractor={item => item.id} renderItem={({
          item
        }) => <View style={_styles.mlTAWniX}>
                <Image source={{
            uri: item.image
          }} style={_styles.mNlNhPAn} />
                <View style={_styles.tVXwdXPi}>
                  <Text style={_styles.MdfdzTmt}>{item.name}</Text>
                  <CheckBox value={item.checked} onValueChange={() => this.handleCheck(item.id)} />
                </View>
              </View>} />
          <TouchableOpacity style={_styles.kCHsAfIv}>
            <Text style={_styles.MCkETzAy}>Share</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>;
  }

}

export default App;

const _styles = StyleSheet.create({
  wqAwiMUg: {
    flex: 1,
    backgroundColor: "#fff"
  },
  RobWheoU: {
    padding: 20
  },
  NFtnCPOy: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10
  },
  mlTAWniX: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  mNlNhPAn: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  tVXwdXPi: {
    marginLeft: 10
  },
  MdfdzTmt: {
    fontSize: 18
  },
  kCHsAfIv: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  MCkETzAy: {
    color: "#fff",
    textAlign: "center"
  }
});