'use client'

import revalidateTagAction from '../actions'

export default function RevalidateButton() {
  const handleClick = () => {
    revalidateTagAction('title')
  }
  return <button onClick={handleClick}>캐시 비우기</button>
}
