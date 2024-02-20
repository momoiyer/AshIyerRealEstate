import { useContext, useEffect, useState } from "react";
import GraphFilter from "./filters/GraphFilter";
import PriceDropBarChart from "./PriceDropBarChart";
import UnderOverBarChart from "./UnderOverBarChart";
import { FilterContext } from "@/contexts/FilterContext";

const Graph = ({ data, cityList }) => {

  const { startDate, endDate } = useContext(FilterContext);
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
        cityList={cityList}
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
};

export default Graph;