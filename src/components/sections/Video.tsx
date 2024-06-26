import classNames from 'classnames/bind'
import styles from './Video.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

export default function Video() {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        poster="/assets/mainposter.png"
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}
