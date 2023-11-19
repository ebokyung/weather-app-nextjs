type Props = {
  city: string
  date: string
  avgTemp: number
}

export default function ForecastWeatherItem({ city, date, avgTemp }: Props) {
  return (
    <li key={date}>
      {city}/{date}의 평균 온도는 {avgTemp}도입니다.
    </li>
  )
}
