import Card from "./Card";
import Work from "../assets/icon-work.svg";
import Excercise from "../assets/icon-exercise.svg";
import Play from "../assets/icon-play.svg";
import SelfCare from "../assets/icon-self-care.svg";
import Social from "../assets/icon-social.svg";
import Study from "../assets/icon-study.svg";

const Weekly = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Card
          image={Work}
          title="Work"
          hours="32hrs"
          total="Last Week - 36hrs"
          color="hsl(15, 100%, 70%)"
        />
        <Card
          image={Play}
          title="Play"
          hours="10hrs"
          total="Last Week - 8hrs"
          color="hsl(195, 74%, 62%)"
        />
        <Card
          image={Study}
          title="Study"
          hours="4hrs"
          total="Last Week - 4hrs"
          color="hsl(348, 100%, 68%)"
        />
      </div>
      <div>
        <Card
          image={Excercise}
          title="Excercise"
          hours="4hrs"
          total="Last Week - 4hrs"
          color="hsl(145, 58%, 55%)"
        />
        <Card
          image={Social}
          title="Social"
          hours="5hrs"
          total="Last Week - 10hrs"
          color="hsl(264, 64%, 52%)"
        />
        <Card
          image={SelfCare}
          title="Self Care"
          hours="2hrs"
          total="Last Week - 2hrs"
          color="hsl(43, 84%, 65%)"
        />
      </div>
    </div>
  );
};

export default Weekly;
