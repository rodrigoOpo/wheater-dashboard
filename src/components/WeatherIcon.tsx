
type Props = {
    src: string
}

function WeatherIcon({src}: Props) {
  return (
    <img 
    className="size-10"
    src={`https://openweathermap.org/payload/api/media/file/${src}.png`} alt="weather icon" />
  )
}

export default WeatherIcon