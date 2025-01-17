import ProfileImage from "../assets/image-jeremy.png";
import "../index.css";
import "../App.css";
import {Navigate, useNavigate} from "react-router-dom";

const Profile = () => {

  const clickDaily = () => {
    console.log("Daily Clicked");
    Navigate("/daily");
  };

  const clickWeekly = () => {
    console.log("Weekly Clicked");
  }

  const clickMonthly = () => {
    console.log("Monthly Clicked");
  }

  return (
    <div className="flex flex-col space-y-6 bg-blue text-white font-rubik p-4 rounded-lg">
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
          <button className="hover:font-bold" onClick={clickDaily}>Daily</button>
          <button className="hover:font-bold" onClick={clickWeekly}>Weekly</button>
          <button className="hover:font-bold" onClick={clickMonthly}>Monthly</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
