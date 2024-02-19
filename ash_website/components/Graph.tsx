import { useEffect, useState } from "react";
import GraphFilter from "./GraphFilter";
import PriceDropBarChart from "./PriceDropBarChart";
import UnderOverBarChart from "./UnderOverBarChart";

const Graph = ({data, cityList}) => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);  
  const [selectedCity, setSelectedCity] = useState('');
  const [processedData, setProcessedData] = useState(null);


   // Filter fetched data whenever startDate, endDate, or fetchedData changes
   useEffect(() => {
    let filteredData;
      
      if (startDate && endDate) {
       filteredData = data.filter(item => {
         const itemDate = new Date(item.statDate);
         const start = startDate ? new Date(startDate) : null;
         const end = endDate ? new Date(endDate) : null;
         return (!start || itemDate >= start) && (!end || itemDate <= end);
       });
      }
      
      if (!filteredData)
       filteredData = data;
     
     setProcessedData(filteredData);    
 }, [startDate, endDate, data]);

  

  return ( 

    <>
      <GraphFilter
        startDate={startDate}
        onChangeStartDate={setStartDate}
        endDate={endDate}
        onChangeEndDate={setEndDate}
        cityList={cityList}
        selectedCity={selectedCity}
        onChangeCitySelectoin={setSelectedCity}
      />
      
      <div className="m-5">
        <PriceDropBarChart
          data={processedData}
        />
        <UnderOverBarChart          
          data={processedData}
        />
      </div>
    </>
   );
}
 
export default Graph;