import Card from "./Card";
import Work from "../assets/icon-work.svg";
import Excercise from "../assets/icon-exercise.svg";
import Play from "../assets/icon-play.svg";
import SelfCare from "../assets/icon-self-care.svg";
import Social from "../assets/icon-social.svg";
import Study from "../assets/icon-study.svg";

const Monthly = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col space-y-6">
        <Card
          image={Work}
          title="Work"
          hours="103hrs"
          total="Last Week - 128hrs"
          color="hsl(15, 100%, 70%)"
        />
        <Card
          image={Play}
          title="Play"
          hours="23hrs"
          total="Last Week - 29hrs"
          color="hsl(195, 74%, 62%)"
        />
      </div>
      <div className="flex flex-col space-y-6">
        <Card
          image={Study}
          title="Study"
          hours="13hrs"
          total="Last Week - 19hrs"
          color="hsl(348, 100%, 68%)"
        />

        <Card
          image={Excercise}
          title="Excercise"
          hours="11hrs"
          total="Last Week - 18hrs"
          color="hsl(145, 58%, 55%)"
        />
      </div>
      <div className="flex flex-col space-y-6">
        <Card
          image={Social}
          title="Social"
          hours="21hrs"
          total="Last Week - 23hrs"
          color="hsl(264, 64%, 52%)"
        />
        <Card
          image={SelfCare}
          title="Self Care"
          hours="7hrs"
          total="Last Week - 11hrs"
          color="hsl(43, 84%, 65%)"
        />
      </div>
    </div>
  );
};

export default Monthly;
