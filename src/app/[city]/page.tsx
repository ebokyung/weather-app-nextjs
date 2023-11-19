import { getForecastWeatherDb } from '../../../utils/getForecastWeather'

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
            <li key={day.date}>
              {day.date}의 평균 온도는 {day.day.avgtemp_c} 입니다.
            </li>
          )
        })}
      </ul>
      <button>홈으로</button>
    </>
  )
}
