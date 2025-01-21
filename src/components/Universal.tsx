import dataJson from "../data.json ";
import Card from "./Card";

const Universal = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col space-y-6">
          <Card
            image={Work}
            title="Work"
            hours="5hrs"
            total="Last Week - 7hrs"
            color="hsl(15, 100%, 70%)"
          />
          <Card
            image={Play}
            title="Play"
            hours="1hrs"
            total="Last Week - 2hrs"
            color="hsl(195, 74%, 62%)"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <Card
            image={Study}
            title="Study"
            hours="0hrs"
            total="Last Week - 1hrs"
            color="hsl(348, 100%, 68%)"
          />
  
          <Card
            image={Excercise}
            title="Excercise"
            hours="1hrs"
            total="Last Week - 1hrs"
            color="hsl(145, 58%, 55%)"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <Card
            image={Social}
            title="Social"
            hours="1hrs"
            total="Last Week - 3hrs"
            color="hsl(264, 64%, 52%)"
          />
          <Card
            image={SelfCare}
            title="Self Care"
            hours="0hrs"
            total="Last Week - 1hrs"
            color="hsl(43, 84%, 65%)"
          />
        </div>
      </div>
    );
  };
  

export default Universal