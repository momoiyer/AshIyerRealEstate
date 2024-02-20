import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS

const DatePickerComponent = ({ selectedDate, onChange }) => {

  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      className="form-input px-4 py-2 border rounded-md" 
    />
  );
};

export default DatePickerComponent;
