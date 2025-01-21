import iconDots from "../assets/icon-ellipsis.svg";

interface CardProps {
  key: number;
  image: string;
  title: string;
  hours: string;
  total: string;
  color: string;
  imageAlt: string;
}

const Card: React.FC<CardProps> = ({ title, hours, total, image, color,imageAlt }) => {
  return (
    <>
      <div className="relative cursor-pointer rounded-lg">
        <div
          className="rounded-lg flex w-full"
          style={{ backgroundColor: color }}
        >
          <img src={image} alt={imageAlt} className="p-2 h-16 w-16" />
        </div>
        <div className="w-full text-white bg-darkBlue hover:bg-desaturatedBlue font-rubik p-6 rounded-lg z-20">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-medium text-lg">{title}</h1>
              <button>
                <img src={iconDots} alt="icon-dots" />
              </button>
            </div>
            <div className="flex flex-col text-left space-y-2">
              <h2 className="font-light text-4xl">{hours}</h2>
              <h2 className="font-light text-sm text-paleBlue">{total}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
