import iconDots from "../assets/icon-ellipsis.svg";

interface CardProps {
  title: string;
  hours: string;
  total: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, hours, total, image }) => {
  return (
    <div className="text-white bg-darkBlue font-rubik p-6 rounded-lg">
      <div>
        <div>
          <img src={image} alt="icon-work" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-medium text-lg">{title}</h1>
          <button>
            <img src={iconDots} alt="icon-dots" />
          </button>
        </div>
        <div className="flex flex-row justify-between items-center space-x-6">
          <h2 className="font-regular text-4xl">{hours}</h2>
          <h3 className="font-light text-sm text-paleBlue">{total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
