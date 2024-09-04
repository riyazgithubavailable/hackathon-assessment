import { useNavigate, useParams } from "react-router-dom";
import { items } from "../utils/items";
import { Button } from "@mui/material";
import Navbar from "./Navbar";
const ChallengeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/edit", { state: { items } });
  };
  return (
    
    <section className=" h-screen bg-[#003145] max-w-6xl mx-auto">
      <Navbar/>
      <header className="max-w-6xl w-full mx-auto  space-y-16 p-8 pl-16">
        <div className="flex items-center justify-between ">
          <button className="bg-yellow-300 text-custom-light">
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </button>
          <button
            className="bg-white text-custom-light"
            onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
        <div className="space-y-8">
          <h1 className="text-white">Data Sprint 72 - Butterfly Identification</h1>
          <p className="text-white">
            Identify the class to which each butterfly belongs to
          </p>
        </div>
        <button className="bg-white">Easy</button>
      </header>
      <div className="bg-white ">
        <div className="max-w-6xl mx-auto space-y-4 p-8">
          <nav className="flex items-center justify-between ">
            <a class="underline decoration-sky-500"><h4>Overview</h4></a>
            <div className="space-x-4">
            
              <Button variant="contained" color="success"
                onClick={()=>navigate("/edit")}
              >
                Edit
              </Button>
             
              <Button variant="outlined" color="error"
                 className="text-red-800 bg-red-100"
                 onClick={() => {
                   items.splice(id, 1);
                   navigate("/");
                 }}
              >Delete</Button>
            </div>
          </nav>
        
        </div>
      </div>
      <div className="max-w-6xl  w-full   p-12  bg-[#F8F9FD]">
          <p style={{color:"#64607D"}}>
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows. <br/><br/>An agency of the Governmental Wildlife
            Conservation is planning to implement an automated system based on
            computer vision so that it can identify butterflies based on
            captured images. As a consultant for this project, you are
            responsible for developing an efficient model. <br/><br/>Your Task is to build
            an Image Classification Model using CNN that classifies to which
            class of weather each image belongs to.
          </p>
          </div>
    </section>
  );
};

export default ChallengeDetails;