import ProfileImage from "../assets/image-jeremy.png";

const Profile = () => {
  return (
    <div>
      <div>
        <img src={ProfileImage} alt="Profile Image" />
      </div>
      <div>
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
