import getCurrentTime from '../../utils/getCurrentTime'
import CurrentWeatherItem from './components/CurrentWeatherItem'
import { City } from '../../types/city'

export default async function Home() {
  const currentTime = await getCurrentTime()
  const cities: City[] = [
    { name: '서울', code: 'seoul' },
    { name: '홍콩', code: 'hongkong' },
  ]

  return (
    <>
      <h1>날씨 앱 만들기 🌈</h1>
      <p>현재 시간은 {currentTime.dateTime}</p>
      <button>캐시 비우기</button>
      <ul>
        {cities.map((city) => {
          return (
            <CurrentWeatherItem
              key={city.code}
              cityName={city.name}
              cityCode={city.code}
            />
          )
        })}
      </ul>
    </>
  )
}
