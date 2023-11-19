import getCurrentTime from '../../utils/getCurrentTime'
import CurrentWeatherItem from './components/CurrentWeatherItem'
import { City } from '../../types/city'
import RevalidateButton from './components/RevalidateButton'

export default async function Home() {
  const currentTime = await getCurrentTime('Asia/Seoul')
  const cities: City[] = [
    { name: '서울', code: 'seoul' },
    { name: '홍콩', code: 'hongkong' },
  ]

  return (
    <>
      <h1>날씨 앱 만들기 🌈</h1>
      <p>현재 시간은 {currentTime.dateTime}</p>
      <RevalidateButton />
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
