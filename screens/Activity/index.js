import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, ScrollView } from 'react-native';

const ExerciseScreen = () => {
  return <SafeAreaView style={_styles.ZhkujoEz}>
      <ScrollView>
        <View style={_styles.ZseBowyB}>
          <Text style={_styles.BDxHuAFs}>Exercise Title</Text>
          <Text style={_styles.kIAiMIeI}>Exercise Description</Text>
          <Text style={_styles.uRasuCNm}>List of all chapters</Text>
          <Text style={_styles.ccjZPueo}>Specific chapter</Text>
          <Text style={_styles.ynilDulH}>Title</Text>
          <Text style={_styles.fPOPjFzY}>Description</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.TceeSunI} />
          <Text style={_styles.FgNTjeLg}>Videos</Text>
          <View style={_styles.izNpLzGv}>
            <Button title="Previous" onPress={() => {}} />
            <Button title="Next" onPress={() => {}} />
          </View>
          <Text style={_styles.PNjvUrKz}>On the last page</Text>
          <TextInput placeholder="Comments" style={_styles.ZxPiTyYc} />
          <Button title="Mark as completed" onPress={() => {}} style={_styles.gHZQZOoB} />
          <Button title="Share with Physician" onPress={() => {}} style={_styles.SgqoBGEr} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ExerciseScreen;

const _styles = StyleSheet.create({
  ZhkujoEz: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  ZseBowyB: {
    padding: 20
  },
  BDxHuAFs: {
    fontSize: 24,
    fontWeight: "bold"
  },
  kIAiMIeI: {
    fontSize: 18,
    color: "#666",
    marginTop: 10
  },
  uRasuCNm: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  ccjZPueo: {
    fontSize: 18,
    color: "#666",
    marginTop: 10
  },
  ynilDulH: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  fPOPjFzY: {
    fontSize: 18,
    color: "#666",
    marginTop: 10
  },
  TceeSunI: {
    width: "100%",
    height: 200,
    marginTop: 20
  },
  FgNTjeLg: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  izNpLzGv: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  PNjvUrKz: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  ZxPiTyYc: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10
  },
  gHZQZOoB: {
    marginTop: 20
  },
  SgqoBGEr: {
    marginTop: 20
  }
});