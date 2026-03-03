import Card from "./Card"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getWheater } from "../../api"
import WeatherIcon from "../WeatherIcon"


type Props = {
}

export default function HourlyForecast({}: Props) {

    const { data } = useSuspenseQuery({
        queryKey: ['weather'],
        queryFn: () => getWheater({lat: 37, lon:120})
    })

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