import dataJson from "../data.json";
import Card from "./Card";

const Universal = () => {
  return (
    <>
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
    </>
  );
};

export default Universal;
