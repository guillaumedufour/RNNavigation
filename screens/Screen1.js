import {Text, StyleSheet, Pressable} from "react-native";

export default function Screen1({setScreen}) {
  return (
    <Pressable onPress={() => setScreen("2")}>
      <Text>Screen1</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
})