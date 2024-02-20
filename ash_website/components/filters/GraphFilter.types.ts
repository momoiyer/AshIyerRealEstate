import { Dispatch, SetStateAction } from "react";

export type FilterProps = {
  startDate: Date|null,
  endDate: Date|null,
  onChangeStartDate: Dispatch<SetStateAction<Date>> | Dispatch<SetStateAction<null>>,
  onChangeEndDate: Dispatch<SetStateAction<Date>> | Dispatch<SetStateAction<null>>,
  cityList: string[],
  selectedCity: string,
  onChangeCitySelectoin: Dispatch<SetStateAction<string>>;
  minPriceCondoFees: number,
  onChangeMinPriceCondoFees: Dispatch<SetStateAction<number>>,
  maxPriceCondoFees: number,
  onChangeMaxPriceCondoFees: Dispatch<SetStateAction<number>>,

};

export type PriceRangeProps = {
  minPrice: number,
  maxPrice: number,
  onChangeMinPrice: Dispatch<SetStateAction<number>>,
  onChangeMaxPrice: Dispatch<SetStateAction<number>>,
}