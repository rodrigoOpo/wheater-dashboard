import { useSuspenseQuery } from "@tanstack/react-query"
import { getWeather } from "../../api"

import cloud from '../../assets/StaticIcons/cloud.svg?react'
import pressure from '../../assets/StaticIcons/pressure.svg?react'
import sunrise from '../../assets/StaticIcons/sunrise.svg?react'
import sunset from '../../assets/StaticIcons/sunset.svg?react'
import uv from '../../assets/StaticIcons/uv.svg?react'
import wind from '../../assets/StaticIcons/wind.svg?react'
import Arrow from '../../assets/StaticIcons/Arrow.svg?react'


import Card from "./Card"

type Props = {}

export default function AdditionalInfo({}: Props) {

  const {data} = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat:22, lon:123})
  })

  return (
    <Card title="Additional Weather Info" childrenClassName="flex flex-col cap-8">
      {rows.map(({label, value, Icon})=> (
        <div className="flex justify-between" key={value}>
          <div className="flex gap-4">
            <span className="text-gray-500">{label}</span>
            <Icon className="size-8 invert"/>
          </div>
          <span>
            <FormatComponent value={value} number={data.current[value]}/>
          </span>
        </div>
      ))}
    </Card>
  )
}

function FormatComponent({value, number}: {value: string, number: number}) {
  
  if (value === "sunrise" || value === "sunset") return new Date( number * 1000).toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: false
  })

  if (value === "wind_deg") 
    return <Arrow className="size-8 invert" style={{transform: `rotate(${number}deg)`}}/>
  
  return number
}

const rows = [
  {
    label: "Cloudiness (%)",
    value: 'clouds',
    Icon: cloud
  },
  {
    label: "UV Index",
    value: 'uvi',
    Icon: uv
  },
  {
    label: "Wind Direction",
    value: 'wind_deg',
    Icon: wind
  },
  {
    label: "Pressure(hPa)",
    value: 'pressure',
    Icon: pressure
  },
  {
    label: "Sunrise",
    value: 'sunrise',
    Icon: sunrise
  },
  {
    label: "Sunset",
    value: 'sunset',
    Icon: sunset
  },
] as const