import LineChart from "./linechart";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Ash Iyer Custom Graph</h1>
        <LineChart/>
      </div>
    </main>
  );
}
