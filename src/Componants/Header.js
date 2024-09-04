import { useNavigate } from "react-router-dom";
import logo1 from "../asset/PicsArt_04-14-04.42 1.svg"
import { Button } from "@mui/material";
const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-between h-2/3 max-w-6xl mx-auto py-32 bg-[#003145] px-25 pl-32">
      <div className="space-y-16 w-2/3">
        <div className="space-y-8">
          <h1>Accelerate Innovation with Global AI Challenges</h1>
          <p className="text-white">
            AI Challenges at asity simulate real-world problems. It is a great<br/>
            place to put your AI/Data Science skills to<br/> test on diverse datasets
            allowing <br/>you to foster learning through competitions.
          </p>
        </div>
        <button
          className="bg-white text-custom-[#003145] font-bold"
          onClick={() => navigate("/admin")}>
          Create challenge
        </button>
        
      </div>
      <img
        src={logo1}
        alt="header image"
        className="w-1/3"
      />
    </section>
  );
};

export default Header;