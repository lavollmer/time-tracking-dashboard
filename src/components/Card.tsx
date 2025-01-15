import iconDots from "../assets/icon-ellipsis.svg";

interface CardProps {
  title: string;
  hours: string;
  total: string;
  image: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ title, hours, total, image, color }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="rounded-lg p-6 z-0" style={{ backgroundColor: color }}>
          <img src={image} alt="icon-work" className="h-2/3 w-1/3" />
        </div>
        <div className="text-white bg-darkBlue font-rubik p-6 rounded-lg z-10">
          <div>
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
      </div>
    </>
  );
};

export default Card;
