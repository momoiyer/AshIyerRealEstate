import Graph from "@/components/Graph";
import TableView from "@/components/TableView";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentView, setCurrentView] = useState('graph'); // Default view is 'graph'  
  const [fetchedData, setFetchedData] = useState([]); // State to hold the original fetched data
  const [cityFilter, setCityFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/readCSV');
      const result = await response.json();
      setFetchedData(result.data); 
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (fetchedData) {
      const uniqueCities = Array.from(new Set(fetchedData.map(item => item.city)));
      if (uniqueCities)
        setCityFilter(uniqueCities);}
  },[fetchedData])

  return (
    <main>
       <div className="flex space-x-4 mb-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCurrentView('graph')}>
          View Graph
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCurrentView('table')}>
          View Table
        </button>
      </div>

      {currentView === 'graph' &&
        <Graph
        data={fetchedData}
        cityList={cityFilter}
        />}
      {currentView === 'table' && <TableView data={fetchedData} />}
    </main>
  );
}
