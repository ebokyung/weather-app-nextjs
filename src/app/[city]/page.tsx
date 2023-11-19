import { getForecastWeatherDb } from '../../../utils/getForecastWeather'
import ForecastWeatherItem from '../components/ForecastWeatherItem'

type Props = { params: { city: 'seoul' } }

export default async function Detail({ params }: Props) {
  const cityCode = params.city
  const forecastWeatherDays = await getForecastWeatherDb(cityCode)
  return (
    <>
      <h1>상세 페이지 여기는 {cityCode}의 3일간 날씨입니다.</h1>
      <ul>
        {forecastWeatherDays?.forecast.forecastday.map((day) => {
          return (
            <ForecastWeatherItem
              city={cityCode}
              date={day.date}
              avgTemp={day.day.avgtemp_c}
            />
          )
        })}
      </ul>
      <button>홈으로</button>
    </>
  )
}
