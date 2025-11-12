import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import {useState} from "react";

export default function App() {
  const [screen, setScreen] = useState('1')
  return (screen === "1" ? <Screen1 setScreen={setScreen}/> : <Screen2 setScreen={setScreen}/>);
}
