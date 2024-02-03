import GraphFilter from "@/components/GraphFilter";
import PriceDropBarChart from "@/components/PriceDropBarChart";
import UnderOverBarChart from "@/components/UnderOverBarChart";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>

      <GraphFilter />
      
      <div className="m-5">
        <h1>Ash Custom Graph</h1>
        <PriceDropBarChart />
        <UnderOverBarChart />
      </div>
    </main>
  );
}
