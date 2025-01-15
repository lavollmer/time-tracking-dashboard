import ProfileImage from "../assets/image-jeremy.png";
import "../index.css";
import "../App.css";

const Profile = () => {
  return (
    <div className="flex flex-col space-y-6 bg-blue text-white font-rubik p-4 rounded-lg">
      <div>
        <img
          src={ProfileImage}
          alt="Profile Image"
          className="border border-white rounded-full ring w-16 h-16"
        />
      </div>
      <div className="text-left">
        <h1 className="text-sm font-light">Report for</h1>
        <h2 className="text-4xl font-regular">Jeremy Robson</h2>
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
