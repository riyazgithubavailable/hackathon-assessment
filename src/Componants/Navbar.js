import { Link } from "react-router-dom";
import logo from "../asset/Group 1000002532.svg"
const Navbar = () => {
  return (
    <nav className="flex-initial w-full justify-start  max-w-6xl mx-auto py-0.5 bg-white    ">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 pl-20" >
        

          <img
            src={logo}
            alt="profile image"
            
            // className="h-8 aspect-square rounded-full cursor-pointer"
          />
        
      </div>
    </nav>
  );
};

export default Navbar;