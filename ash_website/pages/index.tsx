import Graph from "@/components/Graph";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Graph />      
    </main>
  );
}
