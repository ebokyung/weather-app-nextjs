import { CurrentWeather } from '../types/currentWeather'
import { WEATHER_API_KEY } from './apiKey'

export default async function getCurrentWeather(
  city: string,
): Promise<CurrentWeather> {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`,
  )
  if (!res.ok) {
    throw new Error(`에러 발생! 현재 날씨를 가져오지 못했습니다. ${res.status}`)
  }
  return res.json()
}
