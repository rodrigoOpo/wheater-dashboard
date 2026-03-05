import Card from "./Card"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getWeather } from "../../api"
import WeatherIcon from "../WeatherIcon"
import type { Coords } from "../../types"
import SvgIcon from "../../assets/SvgIcon"


type Props = {
  coords: Coords
}

export default function HourlyForecast({coords}: Props) {

    const { data, isPending } = useSuspenseQuery({
        queryKey: ['weather', coords],
        queryFn: () => getWeather({lat: coords.lat, lon: coords.lon})
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
    <Card title="Hourly Forecast (48 hours)" childrenClassName="flex flex-row gap-6 overflow-x-auto hide-scrollbar">        
      {data?.hourly.map(hour => (
          <div  key={hour.dt} className="flex flex-col gap-2 items-center p-2">
            <p className="whitespace-nowrap">
              {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour:"numeric",
              minute:"2-digit",
              hour12:true
            })}</p>
            <WeatherIcon src={hour.weather[0].icon}/>
            <p>{Math.round(hour.temp)}º</p>
          </div>
      ))}
    </Card>
  )
}