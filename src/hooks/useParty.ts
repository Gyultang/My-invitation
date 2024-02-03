import { Card } from '@models/card'
import { useEffect, useState } from 'react'
import { getParty } from '../api/party'

export default function useParty() {
  const [card, setCard] = useState<Card | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // 데이터호출
  // 최초에 랜더링이 한번한 후 데이터를 최초1번호출하기위해 useEffect에 데이터를 불러와줌
  useEffect(() => {
    setLoading(true)
    getParty()
      .then((res) => {
        if (res.ok === false) {
          throw new Error('정보를 불러오지 못했습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setCard(data)
        setLoading(false)
      })
      .catch((e) => {
        console.log('에러발생', e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { card, loading, error }
}
