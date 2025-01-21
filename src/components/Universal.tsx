import dataJson from "../data.json";
import Card from "./Card";

const Universal = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col space-y-6">
          {dataJson.map((data) => (
            <Card
            key={data.id}
            title={data.title}
            hours={data.timeframes.daily.current}
            total={`Last Week - ${data.timeframes.daily.previous}`}
            />
          )}
        </div>
      </div>
    );
  };
  

export default Universal