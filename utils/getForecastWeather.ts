import { ForecastWeather } from './../types/forecastWeather'
import { WEATHER_API_KEY } from './apiKey'

async function getForecastWeather(city: string): Promise<ForecastWeather> {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`,
  )
  if (!res.ok) {
    throw new Error(
      `에러 발생! 3일간 날씨를 가져오지 못했습니다. ${res.status}`,
    )
  }
  return res.json()
}

export async function getForecastWeatherDb(
  city: string,
): Promise<ForecastWeather> {
  try {
    const data = await fetch(
      `http://localhost:9999/forecastWeather?location.name=${city}`,
    ).then((res) => res.json())

    return data[0]
  } catch (e) {
    throw new Error(`에러 발생! 3일간 날씨를 가져오지 못했습니다. ${e}`)
  }
}
