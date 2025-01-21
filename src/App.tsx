import "./index.css";
import "./App.css";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Universal from "./components/Universal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/universal" element={<Universal />} />
          {/* <Route path="/weekly" element={<Weekly />} />
          <Route path="/monthly" element={<Monthly />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
