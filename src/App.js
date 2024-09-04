import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ChallengeDetails from "./Componants/ChallengeDetails";
import Edit from "./Componants/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/details/:id" element={<ChallengeDetails />} />
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;