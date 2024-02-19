import { useState } from "react";
import GraphFilter from "./GraphFilter";
import PriceDropBarChart from "./PriceDropBarChart";
import UnderOverBarChart from "./UnderOverBarChart";

const Graph = ({data}) => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return ( 

    <>
      <GraphFilter
        startDate={startDate}
        onChangeStartDate={setStartDate}
        endDate={endDate}
        onChangeEndDate={setEndDate}
      />
      
      <div className="m-5">
        <PriceDropBarChart
        startDate={startDate}
          endDate={endDate}
          fetchedData={data}
        />
        {/* <UnderOverBarChart /> */}
      </div>
    </>
   );
}
 
export default Graph;