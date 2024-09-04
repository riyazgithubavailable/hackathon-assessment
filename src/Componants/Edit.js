import React  from "react";
import butterfly from "../asset/Group 1000002766butterfly.svg"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
 
const EditComponent = () => {
    const navigate = useNavigate();
  return (
    <section className="h-full w-full bg-white max-w-6xl mx-auto">
      <Navbar/>
      <div className=" flex justify-start max-w-6xl h-[80px] w-full   p-5 ptb-8   bg-[#F8F9FD]">
        <h2 className="text-black ">Challenge Details</h2>
        </div>
      <header className="max-w-6xl h-full w-full mx-auto space-y-16 p-8 pl-16">
        
        <form  className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
          <label>Title:</label>
            <br/>
            <input
              type="text"
              placeholder="Data Sprint 72 - Butterfly Identification"
               className="border p-2 rounded-xl"
            />
          
           <br />
           <label htmlFor="start">Start Date</label>
           <br/>
          <input id="start" type="text" placeholder="17th Jun'22 09:00 PM " 
             className="border p-2 rounded-xl"
          />
          <br/>
          <label htmlFor="end" >End Date</label>
          <br/>
          <input type="text" id="end" placeholder="21st Jun'22 11:00 PM"
           className="border p-2 rounded-xl "
          />
          <br/>
          <label>  Description:</label>
          <br/>
            <textarea
              placeholder="Identify the class to which each butterfly belongs to "
              className="col-span-1 row-span-1 border p-2 rounded-xl"
             
            />
          <br/>
          <img src={butterfly} alt="ran" className="w-[240px]" />
          <br/>
          <Button variant="contained" color="success" onClick={()=>navigate("/")}
             className="w-fit"
            >
            SaveChanges
          </Button>
        </form>
      </header>
    </section>
  );
};

export default EditComponent;
