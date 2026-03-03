import CurrentWeather from "./components/cards/CurrentWeather"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
import { useQuery } from "@tanstack/react-query"
import { getWheater } from "./api"
import SvgIcon from "./assets/SvgIcon"

function App() {

  const {isPending} = useQuery({
        queryKey: ['weather'],
        queryFn: () => getWheater({lat: 47, lon:122})
    })

    if (isPending) {
      return (
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-semibold text-6xl mt-40">
            Espera un momento :D
          </h1>
          <SvgIcon/>
        </div>
    )
    }

  return (
    <div className="flex flex-col gap-8 bg-zinc-1000 overflow-y-auto hide-scrollbar">
      <CurrentWeather/>
      <HourlyForecast/>
      <DailyForecast/>
    </div>
  )
}

export default App
