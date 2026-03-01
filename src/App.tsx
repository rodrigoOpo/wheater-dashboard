import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"

function App() {


  return (
    <div className="flex flex-col gap-8 bg-zinc-1000">
      <DailyForecast/>
      <HourlyForecast/>
    </div>
  )
}

export default App
