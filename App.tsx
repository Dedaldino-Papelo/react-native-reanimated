import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Home from "./src/Screens/Home";

export default function App() {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Home />
    </GestureHandlerRootView>
  )
}