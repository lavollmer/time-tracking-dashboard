import "./index.css";
import "./App.css";
import Weekly from "./components/Weekly";
import Profile from "./components/Profile";
import Daily from "./components/Daily";
import Monthly from "./components/Monthly";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/daily' element={<Daily />} />
      <Route path='/weekly' element={<Weekly />} />
      <Route path='/monthly' element={<Monthly />} />
    </Routes>
    </BrowserRouter>
      <div className="flex flex-row items-center space-x-4 container-bg">
        <div className="grid grid-2-cols flex flex-row"></div>
        <div className="flex flex-col">
          <Profile />
        </div>
        <div>
          <Weekly />
        </div>
      </div>
    </>
  );
}

export default App;
