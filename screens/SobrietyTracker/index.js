import React from 'react';
import { SafeAreaView, Text, View, Image, Button, ScrollView, StyleSheet } from 'react-native';

const SobrietyTrackerScreen = () => {
  const sobrietyData = {
    daysSober: 90,
    hoursSober: 2160,
    minutesSober: 129600
  };
  const milestones = [{
    days: 7,
    message: 'One Week Sober!'
  }, {
    days: 30,
    message: 'One Month Strong!'
  }, {
    days: 90,
    message: 'Three Months Victory!'
  }, {
    days: 365,
    message: 'One Year Triumph!'
  }];
  const rewards = [{
    days: 7,
    badge: 'Bronze Achiever Badge'
  }, {
    days: 30,
    badge: 'Silver Star Badge'
  }, {
    days: 90,
    badge: 'Gold Champion Badge'
  }, {
    days: 365,
    badge: 'Platinum Hero Badge'
  }];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Sobriety Tracker</Text>
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>Number of Days Sober: {sobrietyData.daysSober}</Text>
          <Text style={styles.dataText}>Number of Hours Sober: {sobrietyData.hoursSober}</Text>
          <Text style={styles.dataText}>Number of Minutes Sober: {sobrietyData.minutesSober}</Text>
        </View>
        <View style={styles.milestoneContainer}>
          {milestones.map((milestone, index) => <View key={index} style={styles.milestone}>
              <Text style={styles.milestoneText}>{milestone.days} Days: {milestone.message}</Text>
            </View>)}
        </View>
        <View style={styles.rewardContainer}>
          {rewards.map((reward, index) => <View key={index} style={styles.reward}>
              <Image style={styles.badge} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
              <Text style={styles.rewardText}>{reward.days} Days: {reward.badge}</Text>
            </View>)}
        </View>
        <Button title="Track Another Day" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  dataContainer: {
    marginVertical: 20
  },
  dataText: {
    fontSize: 18,
    marginVertical: 5
  },
  milestoneContainer: {
    marginVertical: 20
  },
  milestone: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 5
  },
  milestoneText: {
    fontSize: 16
  },
  rewardContainer: {
    marginVertical: 20
  },
  reward: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 5
  },
  badge: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  rewardText: {
    fontSize: 16
  }
});
export default SobrietyTrackerScreen;