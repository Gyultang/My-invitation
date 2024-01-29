import { parseISO, format, getDay } from 'date-fns'
import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export default function Heading({ date }: { date: string }) {
  const partyDate = parseISO(date)
  console.log(DAYS[getDay(partyDate)])

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(partyDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(partyDate)]}</div>
    </Section>
  )
}
