import {Text, StyleSheet, Pressable} from "react-native";

export default function Screen2({setScreen}) {
  return (
    <Pressable onPress={() => setScreen("1")}>
      <Text>Screen2</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
})