import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tutiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import AuthContext from "./tutiter/services/auth-context";

function App() {
  return (
    <BrowserRouter>
      {/* <AuthContext> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/labs" />} />
            <Route path="/labs/*" element={<Labs />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/tuiter/*" element={<Tuiter />} />
          </Routes>
        </div>
      {/* </AuthContext> */}
    </BrowserRouter>
  );
}

export default App;
