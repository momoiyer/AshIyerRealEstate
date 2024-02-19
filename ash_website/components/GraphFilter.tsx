import { useState } from "react";
import DatePickerComponent from "./DatePicker";
import { FilterProps } from "./GraphFilter.types";

const GraphFilter = ({startDate, endDate,onChangeStartDate, onChangeEndDate, cityList, selectedCity, onChangeCitySelectoin}: FilterProps) => {  

    // Handle selection change
    const handleChange = (event) => {
      onChangeCitySelectoin(event.target.value);
  };

  const handleReset = () => {
    onChangeStartDate(null);
    onChangeEndDate(null);
    onChangeCitySelectoin("");
  }

  return (
    <div className="m-5">
      <div className="m-5 flex">
        <div className="p-4">
          <h1 className="mb-4">Select Start Date</h1>
          <DatePickerComponent 
            selectedDate={startDate} 
            onChange={onChangeStartDate}  />
        </div>
        <div className="p-4">
          <h1 className="mb-4">Select End  Date</h1>
          <DatePickerComponent  
            selectedDate={endDate} 
            onChange={onChangeEndDate} />
        </div>
        <div className="p-4">
        <select value={selectedCity} onChange={handleChange} className="border rounded-md p-2">
        <option value="">Select a City</option>
        {cityList.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
        </div>
      </div>
      <button
        onClick={handleReset}
        disabled={!startDate || !endDate}
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-full">
        Reset
      </button>
    </div>
  );
};
export default GraphFilter;