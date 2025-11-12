import {Text, StyleSheet, Pressable} from "react-native";

export default function Screen2({route}) {
  const {name} = route.params;
  return (
    <Pressable style={styles.container} onPress={() => {
      props.navigation.navigate("Screen2");
    }}>
      <Text>Hello {name}</Text>
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