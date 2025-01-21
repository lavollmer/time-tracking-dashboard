import ProfileImage from "../assets/image-jeremy.png";
import "../index.css";
import "../App.css";
import dataJson from "../data.json";
import Card from "./Card";

const Profile = () => {
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
            <button className="hover:font-bold">
              Daily
            </button>
            <button className="hover:font-bold">
              Weekly
            </button>
            <button className="hover:font-bold">
              Monthly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {dataJson.map((data, index) => (
            <Card
              key={index}
              image={data.image}
              title={data.title}
              hours={`${data.timeframes.daily.current}hrs`}
              total={`Last Week - ${data.timeframes.daily.previous}`}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          {dataJson.map((data, index) => (
            <Card
              key={index}
              image={data.image}
              title={data.title}
              hours={`${data.timeframes.weekly.current}hrs`}
              total={`Last Week - ${data.timeframes.weekly.previous}`}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          {dataJson.map((data, index) => (
            <Card
              key={index}
              image={data.image}
              title={data.title}
              hours={`${data.timeframes.monthly.current}hrs`}
              total={`Last Week - ${data.timeframes.monthly.previous}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
