import "./index.css";
import "./App.css";
import Weekly from "./components/Weekly";
import Profile from "./components/Profile";
import Daily from "./components/Daily";
import Monthly from "./components/Monthly";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Universal from "./components/Universal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/daily" element={<Universal />} />
          {/* <Route path="/weekly" element={<Weekly />} />
          <Route path="/monthly" element={<Monthly />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
