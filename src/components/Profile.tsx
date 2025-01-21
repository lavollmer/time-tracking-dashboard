import ProfileImage from "../assets/image-jeremy.png";
import "../index.css";
import "../App.css";
import Card from "./Card";
import { useEffect, useState } from "react";

interface Timeframe {
  current: number;
  previous: number;
}

interface Data {
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
  hours: number;
  total: number;
  image: string;
}

const Profile = () => {
  const [jsonData, setjsonData] = useState<Data[]>([]);
  const [selectedItem, setSelectedItem] = useState<Data | null>(null);

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setjsonData(data))
      .catch((error) => console.log("Error", error));
  }, []);

  const handleItemClick = () => {
    console.log("Clicked");
    setSelectedItem(jsonData[0]);
  };

  return (
    <>
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
            <button className="hover:font-bold" onClick={handleItemClick}>
              Click
            </button>
          </div>
        </div>
        <div>
          {selectedItem && (
            <div className="grid grid-cols-2 gap-6">
              {jsonData.map((data, index) => (
                <Card
                  key={index}
                  image={data.image}
                  title={data.title}
                  hours={`${data.timeframes.daily.current}hrs`}
                  total={`Last Week - ${data.timeframes.daily.previous}hrs`}
                  color="hsl(15, 100%, 70%)"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
