import logo from "./logo.svg";
import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tutiter";

function App() {
  return (
    <div className="container">
      <HelloWorld />
      <Labs />
      <Tuiter />
    </div>
  );
}

export default App;
