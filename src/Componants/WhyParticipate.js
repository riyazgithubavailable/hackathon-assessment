
import note from "../asset/carbon_notebook-referencenote (1).svg";
import card from"../asset/IdentificationCardcard.svg";
import group from "../asset/Vectorgroup.png";
import robot from "../asset/Robotrobot.svg";

const WhyParticipate = () => {
  return (
    <section className="bg-white py-32 w-full max-w-6xl mx-auto py-0.5 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2>
          Why participate in{" "}
          <span className="text-custom-green" style={{color:"green"}}>AI challenges?</span>
        </h2>
        <div className="masonry-2-col px-16">
         
          <div className="break-inside mb-4 p-8 bg-[#F8F9FD] rounded-xl space-y-4 border border-transparent hover:border-custom-ligh w-auto h-auto cursor-pointer">
            
            <img src={note} alt="notebook" className="bg-white p-2 rounded-xl w-fit"/>
            <h4 className="font-bold">Prove your skills</h4 >
            <p style={{color:"#64607D"}}>Gain substantial experience by solving real-world problems <br/>and pit against others to come up with innovative solutions.</p>
            </div>
            <div className="break-inside mb-4 p-8 bg-[#F8F9FD] rounded-xl space-y-4 border border-transparent hover:border-custom-ligh w-auto h-auto cursor-pointer">
            <img src={robot} alt="robot" className="bg-white p-2 rounded-xl w-fit"/>
            <h4 className="font-bold">Challenge yourself</h4 >
            <p style={{color:"#64607D"}}>There is nothing for you to lose by participating in a <br/>challenge. You can fail safe, learn out of the entire <br/>experience and bounce back harder.</p>
            </div>
            <div className="break-inside mb-4 p-8 bg-[#F8F9FD] rounded-xl space-y-4 border border-transparent hover:border-custom-ligh w-auto h-auto cursor-pointer">
            <img src={group} alt="group" className="bg-white p-2 rounded-xl w-fit"/>
            <h4 className="font-bold">Learn from community</h4 >
            <p style={{color:"#64607D"}}>One can look and analyze the solutions submitted by the <br/>other Data Scientists in the community and learn from them.</p>
            </div>
            <div className="break-inside mb-4 p-8 bg-[#F8F9FD] rounded-xl space-y-4 border border-transparent hover:border-custom-ligh w-auto h-auto cursor-pointer">
            <img src={card} alt="id-card" className="bg-white p-2 rounded-xl w-fit"/>
            <h4 className="font-bold">Earn recognition</h4 >
            <p style={{color:"#64607D"}}>You will stand out from the crowd if you do well in AI <br/>challenges, it not only helps you shine in the community but<br/> also earns rewards.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;