import { CurrentTime } from '../types/currentTime'

export default async function getCurrentTime(): Promise<CurrentTime> {
  // 'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul',
  const res = await fetch(`http://localhost:9999/currentTime`)

  if (!res.ok) {
    throw new Error('에러 발생! 시간을 가져오지 못했습니다')
  }

  return res.json()
}