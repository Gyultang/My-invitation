import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

export default function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Ballon />
      ) : (
        <>
          <Error />
          <p style={{ color: 'gray', fontSize: '25px', fontWeight: '700' }}>
            Err!! 잠시후 다시 시도해주세요.
          </p>
        </>
      )}
    </div>
  )
}

function Ballon() {
  return (
    <svg
      className={cx('icon-ballon')}
      viewBox="0 0 128 128"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <g data-name="Ballon" id="eac945e7-497e-4702-940f-23af80b7aba8">
        <polygon fill="#fe9f59" points="64 71 61 76 69 76 67 71 64 71" />
        <polygon
          fill="#a54fe7"
          points="36.11 78.67 33.44 83.11 40.56 83.11 38.78 78.67 36.11 78.67"
        />
        <polygon
          fill="#fe3838"
          points="89.59 83.46 86.87 88 94.13 88 92.31 83.46 89.59 83.46"
        />
        <path
          d="M115,54c0,10-3.88,18.86-9.88,24.4a0,0,0,0,1,0,0,21.5,21.5,0,0,1-14.61,6C77,84.37,66,70.76,66,54c0-12.07,5.67-22.49,13.88-27.4a0,0,0,0,0,0,0,20.55,20.55,0,0,1,10.61-3C104,23.57,115,37.18,115,54Z"
          fill="#db3030"
        />
        <path
          d="M115,54c0,10-3.88,18.86-9.88,24.4a0,0,0,0,1,0,0,20.55,20.55,0,0,1-10.61,3c-6.81,0-13-3.45-17.4-9A34.28,34.28,0,0,1,70,51c0-10,3.88-18.86,9.88-24.4a0,0,0,0,0,0,0,20.62,20.62,0,0,1,10-3h.6C104,23.57,115,37.18,115,54Z"
          fill="#fe3838"
        />
        <path
          d="M97,45c0,10-3.88,18.86-9.88,24.4a0,0,0,0,1,0,0,20.61,20.61,0,0,1-10,3A34.28,34.28,0,0,1,70,51c0-10,3.88-18.86,9.88-24.4a0,0,0,0,0,0,0,20.62,20.62,0,0,1,10-3A34.28,34.28,0,0,1,97,45Z"
          fill="#db3030"
        />
        <path
          d="M61,49.78c0,16.44-10.75,29.78-24,29.78-12.44,0-22.67-11.76-23.88-26.8-.08-1-.12-2-.12-3C13,33.33,23.75,20,37,20c10.73,0,19.82,8.74,22.88,20.8A36,36,0,0,1,61,49.78Z"
          fill="#8e44c7"
        />
        <path
          d="M60,43.78c0,16.44-10.75,29.78-24,29.78-10.73,0-19.82-8.74-22.88-20.8-.08-1-.12-2-.12-3C13,33.33,23.75,20,37,20c10.73,0,19.82,8.74,22.88,20.8C60,41.78,60,42.77,60,43.78Z"
          fill="#a54fe7"
        />
        <path
          d="M92,38.5C92,57,79.91,72,65,72c-8.5,0-16.09-4.88-21-12.51a38.59,38.59,0,0,1-6-21C38,20,50.09,5,65,5a24,24,0,0,1,17,7.51C88.12,18.65,92,28,92,38.5Z"
          fill="#fe964a"
        />
        <path
          d="M88,33.5C88,52,75.91,67,61,67a24,24,0,0,1-17-7.51,38.59,38.59,0,0,1-6-21C38,20,50.09,5,65,5a24,24,0,0,1,17,7.51A38.59,38.59,0,0,1,88,33.5Z"
          fill="#fe9f59"
        />
        <ellipse
          cx="23.5"
          cy="31"
          fill="#b36fe7"
          rx="5"
          ry="2.5"
          transform="translate(-15.39 32.04) rotate(-54.37)"
        />
        <ellipse
          cx="52.5"
          cy="15"
          fill="#feb27a"
          rx="5"
          ry="2.5"
          transform="translate(9.72 48.93) rotate(-54.37)"
        />
        <ellipse cx="48.5" cy="24" fill="#feb27a" rx="1.5" ry="2" />
        <path
          d="M38,80s5,8,8,26,12,4,14,4"
          fill="none"
          stroke="#a81e49"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="M92,85s-16.57,4.3-21,22c-2,8-24,16.22-26,16"
          fill="none"
          stroke="#a81e49"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="M66,72s-10,15-7,33,19,16,21,16"
          fill="none"
          stroke="#a81e49"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="M40,80s-5-1-6,0"
          fill="none"
          stroke="#a81e49"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="M94,85s-5-1-6,0"
          fill="none"
          stroke="#a81e49"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="M68.5,72.17s-5-1-6,0"
          fill="none"
          stroke="#a81e49"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </g>
    </svg>
  )
}

function Error() {
  return (
    <svg
      className={cx('icon-error')}
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
    </svg>
  )
}
