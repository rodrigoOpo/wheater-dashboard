import CurrentWeather from "./components/cards/CurrentWeather"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
import AdditionalInfo from "./components/cards/AdditionalInfo"
import Map from "./components/Map"

import { useState, Suspense } from "react"
import type { Coords } from "./types"
import SvgIcon from "./assets/SvgIcon"

function App() {

    const [coords, setCoords] = useState<Coords>({lat: 40, lon: 55})

    const onMapClick = (lat:number, lon:number) => {
      setCoords({lat, lon})
    }

  return (
    <div className="flex flex-col gap-8 bg-zinc-1000 overflow-y-auto hide-scrollbar">
      <Map coords={coords} onMapClick={onMapClick}/>
      <Suspense 
      fallback=
      {<div className="flex flex-col gap-2 items-center">
        <h1 className="font-bold">Cargando el clima ...</h1>
        <SvgIcon/>
      </div>}>
        <CurrentWeather coords={coords}/>
        <HourlyForecast coords={coords}/>
        <DailyForecast coords={coords}/>
        <AdditionalInfo coords={coords}/>
      </Suspense>
    </div>
  )
}

export default App
