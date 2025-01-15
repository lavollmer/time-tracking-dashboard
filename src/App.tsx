import "./index.css";
import "./App.css";
import Weekly from "./components/Weekly";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="container-bg">
        <div className="flex flex-row justify-center items-center">
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
