import iconDots from "../assets/icon-ellipsis.svg";

interface CardProps {
  key: number;
  image: string;
  title: string;
  hours: string;
  total: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ title, hours, total, image, color }) => {
  return (
    <>
      <div className="relative w-full h-24">
        <div className="rounded-lg flex w-full" style={{ backgroundColor: color }}>
          <img
            src={image}
            alt="icon-work"
            className="p-2 h-16 w-16"
          />
        </div>
        <div className="absolute -mt-16 w-full text-white bg-darkBlue font-rubik p-6 rounded-lg z-20">
          <div>
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-medium text-lg">{title}</h1>
              <button>
                <img src={iconDots} alt="icon-dots" />
              </button>
            </div>
            <div className="flex flex-row justify-between items-center space-x-6">
              <h2 className="font-light text-4xl">{hours}</h2>
              <h3 className="font-light text-sm text-paleBlue">{total}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
