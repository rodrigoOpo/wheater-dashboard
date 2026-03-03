import { weatherSchema } from "./schemas/weatherSchema"

const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather({lat, lon}: {lat: number, lon:number}) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const result = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`
    )
    const data = await result.json()
    console.log(data)
    return weatherSchema.parse(data)
}