import Card from "./Card"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getWeather } from "../../api"
import WeatherIcon from "../WeatherIcon"
import type { Coords } from "../../types"
import SvgIcon from "../../assets/SvgIcon"

type Props = {
    coords: Coords
}

function DailyForecast({coords}: Props) {

    const {data, isPending} = useSuspenseQuery({
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
    
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
        {data?.daily.map(day => (
            <div key={day.dt}
            className="flex justify-between">
                <p className="w-9">
                {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                    weekday: "short"
                })}</p> 
                <WeatherIcon src={day.weather[0].icon}/>
                <p>{Math.round(day.temp.day)}º</p>
                <p className="text-gray-500/75">{Math.round(day.temp.min)}º</p>
                <p className="text-gray-500/75">{Math.round(day.temp.max)}º</p>
            </div>
        ))}
    </Card>
  )
}

export default DailyForecast