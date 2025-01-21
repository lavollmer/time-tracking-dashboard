import ProfileImage from "../assets/image-jeremy.png";
import "../index.css";
import "../App.css";
import dataJson from "../data.json";
import Card from "./Card";
import {useEffect, useState} from "react";

const Profile = () => {
const [jsonData,setjsonData] = useState([]);
const [selectedItem, setSelectedItem] = useState(null);

useEffect(() => {
  fetch(../data.json)
  .then((response)=>response.json())
  .then((data)=>setjsonData(data))
  .catch((error)=>console.log('Error',error));
},[]);


const handleItemClick = () => {
  const item =jsonData.find((data)=>data.key===item.key);
  setSelectedItem(item);
}


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
            <h1 className="text-sm font-light">Daily</h1>
            <h1 className="text-sm font-light">Weekly</h1>
            <h1 className="text-sm font-light">Monthly</h1>
            <button className="hover:font-bold" onClick={handleItemClick}>
              Daily
            </button>
            <button className="hover:font-bold">Weekly</button>
            <button className="hover:font-bold">Monthly</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {dataJson.map((item) => (
            <Card
              key={item.id}
              image={data.image}
              title={data.title}
              hours={`${data.timeframes.daily.current}hrs`}
              total={`Last Week - ${data.timeframes.daily.previous}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
