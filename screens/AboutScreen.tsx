import React from "react";
import { Text, View, StyleSheet, StatusBar, Button } from "react-native";

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>AboutPage</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
});

export default AboutScreen;
