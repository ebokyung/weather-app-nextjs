import { CurrentTime } from '../types/currentTime'

export default async function getCurrentTime(): Promise<CurrentTime> {
  const res = await fetch(
    'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul',
  )

  if (!res.ok) {
    throw new Error('에러 발생! 시간을 가져오지 못했습니다')
  }

  return res.json()
}
