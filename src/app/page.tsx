import Link from 'next/link'
import getCurrentTime from '../../utils/getCurrentTime'
import getCurrentWeather from '../../utils/getCurrentWeather'

export default async function Home() {
  const currentTime = await getCurrentTime()
  const currentWeather = await getCurrentWeather('Seoul')

  return (
    <>
      <h1>날씨 앱 만들기 🌈</h1>
      <p>현재 시간은 {currentTime.dateTime}</p>
      <button>캐시 비우기</button>
      <ul>
        <li>
          <Link href="/seoul">
            서울의 날씨는 {currentWeather.current.condition.text}
          </Link>
        </li>
        <li>
          <Link href="/hongkong">
            홍콩의 날씨는 {currentWeather.current.condition.text}
          </Link>
        </li>
      </ul>
    </>
  )
}
