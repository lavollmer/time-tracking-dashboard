import Card from "./Card";
import Work from "../assets/icon-work.svg"

const Weekly = () => {
  return (
    <div>
      <h1>Weekly</h1>
      <Card image={Work} title="work" hours="32hrs" total="Last Week - 36hrs" />
    </div>
  );
};

export default Weekly;
