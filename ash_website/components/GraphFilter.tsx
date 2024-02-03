import DatePickerComponent from "./DatePicker";

const GraphFilter = () => {
  
  const handleFilter = () => {
    console.log("Here to filter data to display in graph");
  }

  return (
    <div className="m-5">
      <div className="m-5 flex">
        <div className="p-4">
          <h1 className="mb-4">Select Start Date</h1>
          <DatePickerComponent />
        </div>
        <div className="p-4">
          <h1 className="mb-4">Select End  Date</h1>
          <DatePickerComponent />
        </div>
      </div>
      <button
        onClick={handleFilter}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
        Filter
      </button>
    </div>
  );
};
export default GraphFilter;