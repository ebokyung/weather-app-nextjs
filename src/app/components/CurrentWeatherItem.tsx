import Link from 'next/link'
import { getCurrentWeatherDb } from '../../../utils/getCurrentWeather'

type Props = {
  cityName: string
  cityCode: string
}

export default async function CurrentWeatherItem({
  cityName,
  cityCode,
}: Props) {
  const currentWeather = await getCurrentWeatherDb(cityCode)

  return (
    <li>
      <Link href={'/' + cityCode}>
        {cityName}의 날씨는 {currentWeather.current.condition.text}
      </Link>
    </li>
  )
}
