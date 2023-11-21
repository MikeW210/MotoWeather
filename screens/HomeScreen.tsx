import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          className="text-3xl font-black text-white"
          style={{ padding: 10 }}
        >
          Your alarms
        </Text>
      </View>
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        right: 30,
      }}>

      <Button style={{
        width:50
      }} title="+"></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080c5e",
    padding: 10
  },
  addAlarmButton: {
    position: 'absolute',
    bottom: 100,
    left: 100
  }
});

export default HomeScreen;
