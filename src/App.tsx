import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import FullScreenMessage from '@shared/FullScreenMessage'

import Heading from './components/sections/Heading'
import Video from './components/sections/Video'
import Intro from './components/sections/Intro'
import { Card } from '@models/card'
import ImageGallery from './components/sections/ImageGallery'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'

const cx = classNames.bind(styles)

function App() {
  const [card, setCard] = useState<Card | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // 데이터호출
  // 최초에 랜더링이 한번한 후 데이터를 최초1번호출하기위해 useEffect에 데이터를 불러와줌
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8888/party')
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

  if (loading) {
    return <FullScreenMessage type="loading" />
  }
  if (error) {
    return <FullScreenMessage type="error" />
  }
  if (card == null) {
    return null
  }
  const {
    date,
    galleryImages,
    bride,
    location,
    message: { intro, invitation },
  } = card
  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        master={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact master={bride} />
      {JSON.stringify(card)}
    </div>
  )
}

export default App
