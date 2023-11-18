import Link from 'next/link'
import getCurrentTime from '../../utils/getCurrentTime'

export default async function Home() {
  const currentTime = await getCurrentTime()

  return (
    <>
      <h1>날씨 앱 만들기 🌈</h1>
      <p>현재 시간은 {currentTime.dateTime}</p>
      <button>캐시 비우기</button>
      <ul>
        <li>
          <Link href="/seoul">서울의 날씨는 ...</Link>
        </li>
        <li>
          <Link href="/hongkong">홍콩의 날씨는 ...</Link>
        </li>
      </ul>
    </>
  )
}
