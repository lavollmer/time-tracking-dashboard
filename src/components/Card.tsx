import {iconDots} from "../assets/icon-ellipsis.svg"

const Card = ({title,hours,total}) => {
  return (
    <div>
      <div>
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
