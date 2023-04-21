import "./App.css";
import TheFlexWay from "./components/TheFlexWay";
import TheGridWay from "./components/TheGridWay";
import ThePaddingWay from "./components/ThePaddingWay";
import TheTransformWay from "./components/TheTranformWay";

function App() {
  return (
    <div className="App">
      <TheFlexWay />
      <TheGridWay />
      <TheTransformWay />
      <ThePaddingWay />
    </div>
  );
}

export default App;
