import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Image, Text, Animated } from 'react-native';

const SplashScreen = ({
  navigation
}) => {
  const fadeAnim = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start(() => navigation.navigate('LoginScreen'));
  }, [fadeAnim]);
  return <SafeAreaView style={styles.container}>
      <Animated.View style={{ ...styles.fadingContainer,
      opacity: fadeAnim
    }}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>{"Welcome to 3-5 Second Rush App"}</Text>
      </Animated.View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  logo: {
    width: 200,
    height: 200
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10
  }
});
export default SplashScreen;