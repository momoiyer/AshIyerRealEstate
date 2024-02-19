const TableView = ({ data }) => {
  
  const DataTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Stat Date</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Price Drop</th>
              <th className="px-4 py-2 text-left">Under/Over List</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                <td className="border px-4 py-2">{item.statDate}</td>
                <td className="border px-4 py-2">{item.city}</td>
                <td className="border px-4 py-2">{item.priceDrop}</td>
                <td className="border px-4 py-2">{item.underOverList}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  
  return (
    <>
      <h1>Data List</h1>
      {DataTable()}
    </>
  );
}
 
export default TableView;