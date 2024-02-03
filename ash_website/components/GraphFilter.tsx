import { useState } from "react";
import DatePickerComponent from "./DatePicker";

const GraphFilter = () => {
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleFilter = () => {
    console.log("Here to filter data to display in graph");
    console.log(`Selected start date is ${startDate} and end date is ${endDate}`);
  }

  return (
    <div className="m-5">
      <div className="m-5 flex">
        <div className="p-4">
          <h1 className="mb-4">Select Start Date</h1>
          <DatePickerComponent 
            selectedDate={startDate} 
            onChange={setStartDate}  />
        </div>
        <div className="p-4">
          <h1 className="mb-4">Select End  Date</h1>
          <DatePickerComponent  
            selectedDate={endDate} 
            onChange={setEndDate} />
        </div>
      </div>
      <button
        onClick={handleFilter}
        disabled={!startDate || !endDate}
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-full">
        Filter
      </button>
    </div>
  );
};
export default GraphFilter;