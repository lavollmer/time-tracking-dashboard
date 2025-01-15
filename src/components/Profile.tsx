import ProfileImage from "../assets/image-jeremy.png";
import "../index.css";
import "../App.css";

const Profile = () => {
  return (
    <div className="flex flex-col bg-blue text-white font-rubik p-4">
      <div>
        <img
          src={ProfileImage}
          alt="Profile Image"
          className="border border-1-white rounded"
        />
      </div>
      <div className="text-center">
        <h1>Report for</h1>
        <h2>Jeremy Robson</h2>
      </div>
      <div>
        <h3>Daily</h3>
        <h3>Weekly</h3>
        <h3>Monthly</h3>
      </div>
    </div>
  );
};

export default Profile;
