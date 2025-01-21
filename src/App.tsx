import { useEffect, useState } from "react";
import ProfileImage from "./assets/image-jeremy.png";
import "./index.css";
import "./App.css";
import Card from "./components/Card";

//defining types for the data
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
  color: string;
  imageAlt: string;
}

const App = () => {
  // state to store the fetched data
  const [jsonData, setJsonData] = useState<Data[]>([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState<
    "daily" | "weekly" | "monthly"
  >("daily");

  // // fetch the data
  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data: Data[]) => {
  //       console.log("Fetched data:", data);
  //       setJsonData(data);
  //     })
  //     .catch((error) => console.log("Error:", error));
  // }, []);

  useEffect(() => {
    const fetchData = async() =>{
      const response = await fetch("/data.json")
      const data = await response.json()
      setJsonData(data);
    }

    fetchData()
  } ,[])

  if(!jsonData){
    return <div>Loading...</div>
  }

  // function to handle button click to display data
  const handleItemClick = (timeframe: "daily" | "weekly" | "monthly") => {
    console.log("Item clicked");
    setSelectedTimeframe(timeframe);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:space-y-0 space-y-6 bg-veryDarkBlue text-white font-rubik w-screen md:justify-center md:items-center p-10 md:p-40">
      <div className="relative z-20 bg-blue p-8 rounded-lg">
        <div className="relative rounded-lg mb-40">
          <div>
            <img
              src={ProfileImage}
              alt="Profile Image"
              className="border border-white rounded-full ring w-16 h-16"
            />
          </div>
          <div className="text-left pt-4">
            <h1 className="text-sm font-light">Report for</h1>
            <h2 className="text-4xl font-regular">Jeremy Robson</h2>
          </div>
        </div>
        <div className="absolute inset-0 z-10 mt-64 bg-darkBlue w-full p-4 rounded-lg">
          <div className="flex flex-col space-y-2">
            <button
              className="hover:font-bold"
              onClick={() => handleItemClick("daily")}
            >
              Daily
            </button>
            <button
              className="hover:font-bold"
              onClick={() => handleItemClick("weekly")}
            >
              Weekly
            </button>
            <button
              className="hover:font-bold"
              onClick={() => handleItemClick("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
      {/* mapping individual cards with data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:pl-10 w-full rounded-lg ">
        {jsonData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            imageAlt={item.imageAlt}
            title={item.title}
            hours={`${item.timeframes[selectedTimeframe].current}hrs`}
            total={`Last Week - ${item.timeframes[selectedTimeframe].previous}hrs`}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
