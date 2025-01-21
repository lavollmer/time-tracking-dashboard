import "./index.css";
import "./App.css";
import Profile from "./components/Profile";
import Universal from "./components/Universal";

function App() {
  return (
    <>
      <div className="p-6 bg-veryDarkBlue font-rubik h-screen w-screen">
        <div className="flex flex-row items-center justify-center space-x-6">
          <div>
            <Profile />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Universal />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
