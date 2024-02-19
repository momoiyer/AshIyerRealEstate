import { Dispatch, SetStateAction } from "react";

export type FilterProps = {
  startDate: Date|null,
  endDate: Date|null,
  onChangeStartDate: Dispatch<SetStateAction<Date|null>>,
  onChangeEndDate: Dispatch<SetStateAction<Date | null>>,
  cityList: string[],
}