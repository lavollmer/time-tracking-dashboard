import iconDots from "../assets/icon-ellipsis.svg";

interface CardProps {
  title: string;
  hours: string;
  total: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, hours, total,image }) => {
  return (
    <div className="text-white">
      <div>
        <img src={image} alt="icon-work" />
        <div>
          <h1>{title}</h1>
          <button>
            <img src={iconDots} alt="icon-dots" />
          </button>
        </div>
        <h2>{hours}</h2>
        <h3>{total}</h3>
      </div>
    </div>
  );
};

export default Card;
