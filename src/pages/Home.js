import ExploreChallenges from "../Componants/ExploreChallenges";
import Header from "../Componants/Header";
import Navbar from "../Componants/Navbar";
import Statistics from "../Componants/Statistics";
import WhyParticipate from "../Componants/WhyParticipate";

const Home = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Navbar/>
      <Header />
      <Statistics />
      <WhyParticipate />
      <ExploreChallenges />
    </div>
  );
};

export default Home;