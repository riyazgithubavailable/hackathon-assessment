import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDateDiff } from "../utils/formatTime";
import butterfly from "../asset/Group 1000002766butterfly.svg"
import data from "../asset/Group 1000002771data.svg";
import snow from "../asset/Group 1000002767snow.svg";
import travel from "../asset/Group 1000002466travel.svg";
import studd from "../asset/Group 1000002766stud.svg";
import pass from "../asset/Group 1000002772pass.svg";
import { Button } from "@mui/material";
const ExploreChallengesCard = ({ item }) => {
  const [diff, setDiff] = useState({});
  const navigate = useNavigate();
  const status =
    new Date() > new Date(item.startDate) && new Date() < new Date(item.endDate)
      ? "Active"
      : new Date() > new Date(item.endDate) &&
        new Date() > new Date(item.endDate)
      ? "Past"
      : "Upcoming";

  item.status = status;

  useEffect(() => {
    const timer =
      (status === "Upcoming" || status === "Active") &&
      setInterval(() => {
        setDiff(getDateDiff(new Date(), new Date(item.startDate)));
      }, 1000);
    return () => clearInterval(timer);
  }, [item]);

  return (
    <Link to={`/details/${item.id}`}>
      <div className="break-inside mb-4 bg-white rounded-3xl w-[304px] h-[423px]overflow-hidden  text-center gap-2 gap-y-3.5 ">
        {item.title==="Data Sprint 72 - Butterfly Identification"?<img src={butterfly} alt="card header image" className="rounded-t-3xl" />:
        
        item.title==="Data Science Bootcamp - Graded Datathon"? <img src={data} alt="data" className="rounded-t-3xl" />:item.title==="Data Sprint 71 - Weather Recognition"?
        <img src={snow} alt="snow" className="rounded-t-3xl"/>:item.title==="Data Sprint 70-Airline Passenger Satisfaction"?<img src={pass} alt="pass" className="rounded-t-3xl"/>:
        item.title==="Engineering Graduates Employment Outcomes"?<img src={studd} alt="stud"className="rounded-t-3xl"/>:<img src={travel} alt="trav" className="rounded-t-3xl"/>
        
        }
        
        <div className="p-8 space-y-4 flex flex-col items-center">
        <button
              className={`${
                status === "Upcoming"
                  ? "text-orange-500 bg-orange-100"
                  : status === "Active"
                  ? "text-custom-green bg-green-100"
                  : "text-red-800 bg-red-100"
              }`}>
              {status}
            </button>
          <h4>{item.title}</h4>
          <p>
            {status === "Upcoming"
              ? "Starts in"
              : status === "Active"
              ? "Ends in"
              : "Ended in"}
          </p>
          {status !== "Past" ? (
            <div className="w-full grid grid-cols-4 divide-x">
              <div>
                <h4>{diff.day}</h4>
                <p>Days</p>
              </div>
              <div>
                <h4>{diff.hour}</h4>
                <p>Hours</p>
              </div>
              <div>
                <h4>{diff.minute}</h4>
                <p>Mins</p>
              </div>
              <div>
                <h4>{diff.second}</h4>
                <p>Mins</p>
              </div>
            </div>
          ) : (
            <h4 className="text-center">{item.endDate}</h4>
          )}
          <div className="space-x-4">
           
            
           
            <Button variant="contained" color="success"
               onClick={()=>navigate("/admin")}
            >Participate now</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreChallengesCard;