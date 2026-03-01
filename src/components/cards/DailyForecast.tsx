import Card from "./Card"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getWheater } from "../../api"

type Props = {}

function DailyForecast({}: Props) {

    const {data} = useSuspenseQuery({
        queryKey: ['weather'],
        queryFn: () => getWheater({lat: 27, lon:28})
    })

  return (
    
    <Card title="Daily Forecast">
        <div className="flex flex-col gap-4">
            {data?.daily.map(day => (
                <div key={day.dt}
                className="flex justify-between">
                    <p className="w-9">
                    {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                        weekday: "short"
                    })}</p> 
                    <img 
                    className="size-10"
                    src={`https://openweathermap.org/payload/api/media/file/${day.weather[0].icon}.png`} alt="weather icon" />
                    <p>{Math.round(day.temp.day)}º</p>
                    <p className="text-gray-500/75">{Math.round(day.temp.min)}º</p>
                    <p className="text-gray-500/75">{Math.round(day.temp.max)}º</p>
                </div>
            ))}
        </div>
    </Card>
  )
}

export default DailyForecast