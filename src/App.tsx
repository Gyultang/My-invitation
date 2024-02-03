import classNames from 'classnames/bind'
import styles from './App.module.scss'
import FullScreenMessage from '@shared/FullScreenMessage'

import Heading from './components/sections/Heading'
import Video from './components/sections/Video'
import Intro from './components/sections/Intro'

import ImageGallery from './components/sections/ImageGallery'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/sections/Share'
import Modal from '@shared/Modal'
import AttendCountModal from './components/AttendCountModal'

import useParty from './hooks/useParty'

const cx = classNames.bind(styles)

function App() {
  const { card, error } = useParty()

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
      <Share master={bride.name} date={date} />
      <AttendCountModal party={card} />
    </div>
  )
}

export default App
