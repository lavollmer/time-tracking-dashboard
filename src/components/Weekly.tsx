import Card from "./Card";
import Work from "../assets/icon-work.svg";

const Weekly = () => {
  return (
    <div className="flex flex-row space-x-4">
      <Card image={Work} title="Work" hours="32hrs" total="Last Week - 36hrs" />
    </div>
  );
};

export default Weekly;
