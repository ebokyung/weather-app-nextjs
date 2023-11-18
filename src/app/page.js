import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>날씨 앱 만들기 🌈</h1>
      <p>현재 시간은 ...</p>
      <button>캐시 비우기</button>
      <ul>
        <li>
          <Link href="/weather/seoul">서울의 날씨는 ...</Link>
        </li>
        <li>
          <Link href="/weather/hongkong">홍콩의 날씨는 ...</Link>
        </li>
      </ul>
    </>
  )
}
