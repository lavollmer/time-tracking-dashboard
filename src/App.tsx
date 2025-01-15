import "./index.css";
import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="container-bg">
        <Profile />
        <Card />
      </div>
    </>
  );
}

export default App;
