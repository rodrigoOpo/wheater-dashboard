import clsx from "clsx"

type Props = {
    src: string
    className?: string
}

function WeatherIcon({src, className}: Props) {
  return (
    <img 
    className={clsx("size-10", className)}
    src={`https://openweathermap.org/payload/api/media/file/${src}.png`}
    alt="weather icon"
    />
  )
}

export default WeatherIcon