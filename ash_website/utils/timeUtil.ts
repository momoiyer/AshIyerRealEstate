function formatDateToShortString(date: Date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = date.getDate().toString().padStart(2, '0');
  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];
  const year = date.getFullYear();

  return `${day}-${monthName}-${year}`;
}

export {
  formatDateToShortString,
}