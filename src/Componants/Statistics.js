import ai from "../asset/Group 1000002515AI.svg";
import no from "../asset/Group 1000002516No..svg";
import sym from "../asset/Group 1000002518sym.svg";
import line from "../asset/Rectangle 6667line.svg";

  const Statistics = () => {
    return (
      <section className="flex items-center justify-between w-full h-40 max-w-6xl mx-auto py-30 bg-[#002A3B] px-25 pl-32">
        
         
          <div className="max-w-6xl   divide-x flex items-center justify-between space-x-8">
            <div className="flex gap-8 items-center justify-between first:justify-start last:justify-end space-x-8">
               <img src={ai} alt="ai-model" className="aspect-square rounded-sm bg-white p-4 w-15"/>
               <div className="gap-10"> 
                <h4 className="text-white">100K+</h4>
                <p className="text-white">AI model submissions</p>
                </div>
                <img src={line} alt="line" className="m-8"/>
                </div>
                <div className="flex gap-4 items-center justify-center first:justify-start last:justify-end space-x-4">
               <img src={no} alt="no-model" className="aspect-square rounded-sm bg-white p-4 w-15"/>
               <div className="gap-8">
                <h4 className="text-white">50K+</h4>
                <p className="text-white">Data Scientists</p>
                </div>
                <img src={line} alt="line"/>
                </div>
                <div className="flex gap-4 items-center justify-center first:justify-start last:justify-end space-x-4">
               <img src={sym} alt="sym-model" className="aspect-square rounded-sm bg-white p-4 w-15"/>
               <div className="gap-8">
                <h4 className="text-white">100+</h4>
                <p className="text-white">AI Challenges hosted</p>
                </div>
                
                </div>
          </div>
      
      </section>
    );
  };
  
  export default Statistics;