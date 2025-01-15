import "./index.css";
import "./App.css";
import Weekly from "./components/Weekly";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="container-bg">
        <div className="grid grid-2-cols flex flex-row"></div>
        <div>
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
