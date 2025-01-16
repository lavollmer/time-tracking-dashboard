import "./index.css";
import "./App.css";
import Weekly from "./components/Weekly";
import Profile from "./components/Profile";

function App() {
  return (
    <>
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
