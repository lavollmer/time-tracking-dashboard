import "./index.css";
import "./App.css";
import Profile from "./components/Profile";
import Universal from "./components/Universal";

function App() {
  return (
    <>
      <div className="flex flex-row space-x-6 p-6">
        <div>
          <Profile />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Universal />
        </div>
      </div>
    </>
  );
}

export default App;
