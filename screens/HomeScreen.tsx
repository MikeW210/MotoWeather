import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList
} from "react-native";
import { Button } from 'react-native-ui-lib';
import { AlarmCard } from '../components/AlarmCard';
import BottomSheet from '@gorhom/bottom-sheet';
import Feather from "react-native-vector-icons/Ionicons";


const HomeScreen = ({navigation}) => {
  type ItemData = {
    id: string;
    title: string;
    time: string;
  };

  const [data, setData] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      time: "8:00",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      time: "9  :00",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      time: "10:00",
    },
  ]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints: string[] | [] = useMemo(() => ["10%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index);
    }, []);
  function openAlarmSheet() {
    bottomSheetRef.current.snapToPosition("50%")
  }
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
      <FlatList
        data={data}
        renderItem={({ item }) => <AlarmCard alarms={item}></AlarmCard>}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <View style={styles.addAlarmButtonPosition}>
        <Button
          style={styles.addAlarmButton}
          label="+"
          onPress={() => openAlarmSheet()}
        ></Button>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <Feather
          name="file-text"
          size={30}
          color="#4F8EF7"
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080c5e",
    padding: 10,
  },
  addAlarmButtonPosition: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  addAlarmButton: {
    height: 80,
    width: 80,
    borderRadius:20
  }
});

export default HomeScreen;
