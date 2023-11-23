import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View, Card } from "react-native-ui-lib";
type AlarmData = {
  id: string,
  title: string,
  time: string,
}
export const AlarmCard = (props: AlarmData): JSX.Element => {
  return (
    <Card style={styles.card} margin-10 padding-10 center onPress={() => console.log("pressed")}>
      <Text>{props.alarms.title}</Text>
      <Text>dupa</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'blue'
  }
})
