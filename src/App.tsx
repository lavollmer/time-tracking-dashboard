import "./index.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="bg-blue">
        <Profile/>
        <Card/>
      </div>
    </>
  );
}

export default App;
