import { parseISO, format, getDay } from 'date-fns'
import { ko } from 'date-fns/locale'
import classNames from 'classnames/bind'
import styles from './Intro.module.scss'
import Section from '@shared/Section'
import Text from '@shared/Text'

const cx = classNames.bind(styles)

interface IntroProps {
  master: string
  locationName: string
  date: string
  message: string
}

export default function Intro({
  master,
  locationName,
  date,
  message,
}: IntroProps) {
  const partyDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('wrap-introMain')}>
        <p>
          26살이 되는 특별한 날을 맞이하여,
          <br /> 여러분을 생일 파티에 초대합니다!
        </p>
      </div>

      <div className={cx('wrap-info')}>
        <p>{format(partyDate, 'yyyy년 M월 d일 eeee', { locale: ko })}</p>
        <p>{locationName}</p>
      </div>
      <IconParty />
      <Text>{message}</Text>
    </Section>
  )
}

function IconParty() {
  return (
    <svg
      className={cx('icon-party')}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <g data-name="Flag Chain" id="c71090ca-4700-4868-bc54-6bd6ef3139df">
        <path
          d="M38.8,96.12,16.51,124.46,12.57,93.13c2.49,1.26,10.49,2,17,2.49C34.64,96,38.8,96.12,38.8,96.12Z"
          fill="#a54fe7"
        />
        <path
          d="M65.07,92.78,53.21,120.86l-7.46-13L38.49,95.17c2.46,1.25,10.4.36,17-.66C60.7,93.7,65.07,92.78,65.07,92.78Z"
          fill="#fe9f59"
        />
        <path
          d="M65.07,92.78l25.51,20.06-.8-28.15S72.65,93.46,65.07,92.78Z"
          fill="#fe3838"
        />
        <path
          d="M89.46,83.74,120,97l-3-28S99,80.63,89.46,83.74Z"
          fill="#45c1ff"
        />
        <path
          d="M38.8,96.12,16.51,124.46,29.58,95.62C34.64,96,38.8,96.12,38.8,96.12Z"
          fill="#9a35e7"
        />
        <path
          d="M65.07,92.78,53.21,120.86l-7.46-13,9.7-13.34C60.7,93.7,65.07,92.78,65.07,92.78Z"
          fill="#fe964a"
        />
        <path
          d="M5,90.88s30,11.23,67.36,0S122.5,64.5,122.5,64.5"
          fill="none"
          stroke="#7024ab"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          d="M89.18,69.12l22.29,28.34,3.94-31.33c-2.49,1.26-10.49,2-17,2.49C93.34,69,89.18,69.12,89.18,69.12Z"
          fill="#a54fe7"
        />
        <path
          d="M62.91,65.78,74.76,93.86l7.46-13,7.26-12.68c-2.46,1.25-10.4.36-17-.66C67.27,66.7,62.91,65.78,62.91,65.78Z"
          fill="#fe9f59"
        />
        <path
          d="M62.91,65.78,37.41,85.84l.8-28.15S55.33,66.46,62.91,65.78Z"
          fill="#fe3838"
        />
        <path
          d="M38.51,56.74,6,66.09l10.3-25S29,53.63,38.51,56.74Z"
          fill="#45c1ff"
        />
        <path
          d="M89.18,69.12l22.29,28.34L98.4,68.62C93.34,69,89.18,69.12,89.18,69.12Z"
          fill="#9a35e7"
        />
        <path
          d="M62.91,65.78,74.76,93.86l7.46-13-9.7-13.34C67.27,66.7,62.91,65.78,62.91,65.78Z"
          fill="#fe964a"
        />
        <path
          d="M123,63.88s-30,11.23-67.36,0S10.55,31.28,10.55,31.28"
          fill="none"
          stroke="#7024ab"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          d="M35,28,5,48l6-31c2,2,9.33,5.21,15.39,7.66C31.09,26.56,35,28,35,28Z"
          fill="#a54fe7"
        />
        <path
          d="M61,33,41,56,38,41.31,35,27c2,2,9.77,3.58,16.33,4.65C56.57,32.51,61,33,61,33Z"
          fill="#fe9f59"
        />
        <path d="M61,33,79,60l8-27S68,36,61,33Z" fill="#fe3838" />
        <path d="M87,32l28,19-2-27S97,32,87,32Z" fill="#45c1ff" />
        <path
          d="M35,28,5,48,26.39,24.66C31.09,26.56,35,28,35,28Z"
          fill="#9a35e7"
        />
        <path
          d="M61,33,41,56,38,41.31l13.37-9.66C56.57,32.51,61,33,61,33Z"
          fill="#fe964a"
        />
        <path
          d="M4.5,12.5s25,20,64,21,53-17,53-17"
          fill="none"
          stroke="#7024ab"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </svg>
  )
}
