import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker 
      selected={startDate} 
      onChange={(date) => setStartDate(date)} 
      showMonthDropdown
                showYearDropdown
                dropdownMode="select" // Allows you to navigate directly to a specific month and year
                className="form-input px-4 py-2 border rounded-md" // Tailwind classes
            
    />
  );
};

export default DatePickerComponent;
