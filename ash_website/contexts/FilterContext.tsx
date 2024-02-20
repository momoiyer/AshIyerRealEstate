import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);  
  const [selectedCity, setSelectedCity] = useState('');
  const [minOriginalListPrice, setMinOriginalListPrice] = useState(0);
  const [maxOriginalListPrice, setMaxOriginalListPrice] = useState(5000);
  const [minListPrice, setMinListPrice] = useState(0);
  const [maxListPrice, setMaxListPrice] = useState(5000);
  const [minCurrentPrice, setMinCurrentPrice] = useState(0);
  const [maxCurrentPrice, setMaxCurrentPrice] = useState(5000);
  const [minPriceCondoFees, setMinPriceCondoFees] = useState(0);
  const [maxPriceCondoFees, setMaxPriceCondoFees] = useState(5000);

  const onReset = () => {
    setStartDate(null);
    setEndDate(null);
    setSelectedCity("");
  };

  const providerData = {
    startDate, setStartDate,
    endDate, setEndDate,
    selectedCity, setSelectedCity,
    minOriginalListPrice, setMinOriginalListPrice,
    maxOriginalListPrice, setMaxOriginalListPrice,
    minListPrice, setMinListPrice,
    maxListPrice, setMaxListPrice,
    minCurrentPrice, setMinCurrentPrice,
    maxCurrentPrice, setMaxCurrentPrice,
    minPriceCondoFees, setMinPriceCondoFees,
    maxPriceCondoFees, setMaxPriceCondoFees,
    onReset
  };

  return (
    <FilterContext.Provider value={providerData}>
      {children}
    </FilterContext.Provider>
  );
};
