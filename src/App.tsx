import "./index.css";
import "./App.css";
import Profile from "./components/Profile";
import Universal from "./components/Universal";

function App() {
  return (
    <>
      <div className="bg-veryDarkBlue font-rubik h-screen w-screen">
        <div className="flex flex-row space-x-6 p-6">
          <Profile />
          {/* <Universal /> */}
        </div>
      </div>
    </>
  );
}

export default App;
