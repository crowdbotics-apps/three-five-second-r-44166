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
    return <SafeAreaView style={_styles.uvjzuWVf}>
        <View style={_styles.wVinHZun}>
          <TextInput style={_styles.oFMAELWC} placeholder="Search..." />
          <FlatList data={this.state.data} keyExtractor={item => item.id} renderItem={({
          item
        }) => <View style={_styles.MBMGTPCA}>
                <Image source={{
            uri: item.image
          }} style={_styles.WuMuyUse} />
                <View style={_styles.sAeaLzln}>
                  <Text style={_styles.lcKDPVXu}>{item.name}</Text>
                  <CheckBox value={item.checked} onValueChange={() => this.handleCheck(item.id)} />
                </View>
              </View>} />
          <TouchableOpacity style={_styles.DDdednco}>
            <Text style={_styles.XISnNbOz}>Share</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>;
  }

}

export default App;

const _styles = StyleSheet.create({
  uvjzuWVf: {
    flex: 1,
    backgroundColor: "#fff"
  },
  wVinHZun: {
    padding: 20
  },
  oFMAELWC: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10
  },
  MBMGTPCA: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  WuMuyUse: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  sAeaLzln: {
    marginLeft: 10
  },
  lcKDPVXu: {
    fontSize: 18
  },
  DDdednco: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  XISnNbOz: {
    color: "#fff",
    textAlign: "center"
  }
});