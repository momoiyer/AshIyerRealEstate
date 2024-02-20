import { useContext, useState } from "react";
import DatePickerComponent from "./DatePicker";
import PriceRangeSelector from "./PriceRangeSelector";
import { FilterContext } from "@/contexts/FilterContext";

const GraphFilter = ({ cityList }) => {

  const {
    startDate, setStartDate, endDate, setEndDate,
    selectedCity, setSelectedCity,
    minOriginalListPrice, setMinOriginalListPrice, maxOriginalListPrice, setMaxOriginalListPrice,    
    minListPrice, setMinListPrice, maxListPrice, setMaxListPrice,
    minCurrentPrice, setMinCurrentPrice, maxCurrentPrice, setMaxCurrentPrice,
    minPriceCondoFees, setMinPriceCondoFees, maxPriceCondoFees, setMaxPriceCondoFees,
    onReset} = useContext(FilterContext);

  // Handle selection change
  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

 

  return (
    <div className="m-5">
      <div className="m-5 flex justify-center">
        <div className="p-4">
          <h1 className="mb-4">Select Start Date</h1>
          <DatePickerComponent
            selectedDate={startDate}
            onChange={setStartDate} />
        </div>
        <div className="p-4">
          <h1 className="mb-4">Select End  Date</h1>
          <DatePickerComponent
            selectedDate={endDate}
            onChange={setEndDate} />
        </div>
        <div className="p-4">
          <h1 className="mb-4">Select a City</h1>
          <select value={selectedCity} onChange={handleChange} className="border rounded-md p-2">
            <option value=""></option>
            {cityList.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="m-5 flex justify-center">
        <div className="p-4">
          <h1 className="mb-4">Select Original List Price</h1>
          <PriceRangeSelector
            maxPrice={maxOriginalListPrice}
            minPrice={minOriginalListPrice}
            onChangeMaxPrice={setMaxOriginalListPrice}
            onChangeMinPrice={setMinOriginalListPrice}
          />
        </div>
        <div className="p-4">
          <h1 className="mb-4">Select List Price</h1>
          <PriceRangeSelector
            maxPrice={maxListPrice}
            minPrice={minListPrice}
            onChangeMaxPrice={setMaxListPrice}
            onChangeMinPrice={setMinListPrice}
          />
        </div>
        <div className="p-4">
          <h1 className="mb-4">Select Current Price</h1>
          <PriceRangeSelector
            maxPrice={maxCurrentPrice}
            minPrice={minCurrentPrice}
            onChangeMaxPrice={setMaxCurrentPrice}
            onChangeMinPrice={setMinCurrentPrice}
          />
        </div>
        <div className="p-4">
          <h1 className="mb-4">Select Condo Fees</h1>
          <PriceRangeSelector
            maxPrice={maxPriceCondoFees}
            minPrice={minPriceCondoFees}
            onChangeMaxPrice={setMaxPriceCondoFees}
            onChangeMinPrice={setMinPriceCondoFees}
          />
        </div>
      </div>

      <button
        onClick={onReset}
        disabled={!startDate || !endDate}
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-full">
        Reset
      </button>
    </div>
  );
};
export default GraphFilter;