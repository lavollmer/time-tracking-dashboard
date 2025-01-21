import "./index.css";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="bg-veryDarkBlue font-rubik h-screen w-screen">
        <div className="flex flex-row space-x-6 p-6">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
