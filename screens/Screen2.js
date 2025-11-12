import {Text, StyleSheet, Pressable} from "react-native";

export default function Screen2(props) {
  return (
    <Pressable style={styles.container} onPress={() => {
      props.navigation.navigate("Screen2");
    }}>
      <Text>Screen2</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})