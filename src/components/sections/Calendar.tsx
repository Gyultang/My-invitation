import classNames from 'classnames/bind'
import styles from './Calendar.module.scss'
import Section from '@shared/Section'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const cx = classNames.bind(styles)

const css = `
    .rdp-caption {
        display:none;
    }
    .rdp-cell {
        cursor: default;
        font-size:18px;
    }
    .rdp-head_cell{
        font-size:17px;
        font-weight:700;
    }
    .rdp-day.rdp-day_selected{
        background:#FFC9F4;
        font-weight:bold;
    }
    .rdp-day.rdp-day_selected:hover{
        background:#FFE2F9;
    }
`

export default function Calendar({ date }: { date: string }) {
  const partyDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(partyDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(partyDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={partyDate}
          selected={partyDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}
