import "./index.css";
import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="container-bg">
        <div className="flex flex-row justify-center items-center">
          <Profile />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
