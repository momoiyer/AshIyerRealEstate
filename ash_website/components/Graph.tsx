import GraphFilter from "./GraphFilter";
import PriceDropBarChart from "./PriceDropBarChart";
import UnderOverBarChart from "./UnderOverBarChart";

const Graph = () => {
  return ( 

    <>
    <GraphFilter />
      
      <div className="m-5">
        <PriceDropBarChart />
        <UnderOverBarChart />
      </div>
    </>
   );
}
 
export default Graph;