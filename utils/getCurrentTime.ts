import { CurrentTime } from '../types/currentTime'

export default async function getCurrentTime(
  timezone: string,
): Promise<CurrentTime> {
  // http://localhost:9999/currentTime
  const res = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`,
    {
      next: { tags: ['time', 'current', 'zone'] },
    },
  )

  if (!res.ok) {
    throw new Error(`에러 발생! 시간을 가져오지 못했습니다 ${res.status}`)
  }

  return res.json()
}