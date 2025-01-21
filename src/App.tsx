import ProfileImage from "./assets/image-jeremy.png";
import "./index.css";
import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";

interface Timeframe {
  current: number;
  previous: number;
}

interface Data {
  id: number;
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
  image: string;
}

const App = () => {
  const [jsonData, setJsonData] = useState<Data[]>([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState<"daily" | "weekly" | "monthly">("daily");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Data[]) => {
        console.log("Fetched data:", data);
        setJsonData(data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

const handleItemClick = (timeframe: "daily" | "weekly" | "monthly") => {
  console.log("Item clicked");
  setSelectedTimeframe(timeframe);
}

  return (
      <div className="bg-veryDarkBlue h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col space-y-6 bg-blue text-white font-rubik p-8 rounded-lg">
          <div className="rounded-full">
            <div>
              <img
                src={ProfileImage}
                alt="Profile Image"
                className="border border-white rounded-full ring w-16 h-16"
              />
            </div>
            <div className="text-left  pt-4">
              <h1 className="text-sm font-light">Report for</h1>
              <h2 className="text-4xl font-regular">Jeremy Robson</h2>
            </div>
          </div>
          <div className="bg-darkBlue w-full h-full p-4 rounded-lg">
            <div className="flex flex-col space-y-2">
              <button className="hover:font-bold" onClick={()=>handleItemClick("daily")}>
                Daily
              </button>
              <button className="hover:font-bold" onClick={()=>handleItemClick("weekly")}>
                Weekly
              </button>
              <button className="hover:font-bold" onClick={()=>handleItemClick("monthly")}>
                Monthly
              </button>
            </div>
          </div>
        </div>
        <div className="p-10 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        {jsonData.map((item, index) => (
          <Card
            key={index} 
            image={item.image}
            title={item.title}
            hours={`${item.timeframes[selectedTimeframe].current}hrs`}
            total={`Last Week - ${item.timeframes[selectedTimeframe].previous}hrs`}
            color="hsl(15, 100%, 70%)"
          />
        ))}
        </div>
      </div>
  );
};

export default App;
