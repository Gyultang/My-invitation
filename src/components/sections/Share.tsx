import classNames from 'classnames/bind'
import styles from './Share.module.scss'
import Section from '@shared/Section'
import { useEffect } from 'react'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)
declare global {
  interface Window {
    Kakao: any
  }
}

export default function Share({
  master,
  date,
}: {
  master: string
  date: string
}) {
  const partyDate = parseISO(date)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js'
    script.async = true
    document.head.appendChild(script)
    script.onload = () => {
      console.log(window)
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  }, [])
  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '특별한 당신을 초대합니다!',
        description: `${format(parseISO(date), 'M월 d일 eeee aaa h시', { locale: ko })}`,
        imageUrl:
          'https://png.pngtree.com/background/20230401/original/pngtree-birthday-party-balloon-background-picture-image_2251829.jpg',
        link: {
          mobileWebUrl: window.location.origin, //http://localhost:3000/
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '초대장 보기',
          link: {
            mobileWebUrl: window.location.origin, //http://localhost:3000/
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }
  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button onClick={handleShareKakao}>
          <IconKakao />
        </button>
        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            window.alert('복사가 완료되었습니다.')
          }}
        >
          <button className={cx('icon-copy')}>
            <IconCopy />
          </button>
        </CopyToClipboard>
      </div>
    </Section>
  )
}

function IconKakao() {
  return (
    <svg
      enable-background="new 0 0 512 512"
      height="25px"
      id="Kakao_Talk_1_"
      version="1.1"
      viewBox="0 0 512 512"
      width="25px"
    >
      <g id="bg">
        <g>
          <polygon fill="#FDEB1D" points="0,0 0,512 355,512 512,354 512,0   " />
        </g>
      </g>
      <g id="Shape_5_copy">
        <g>
          <path
            d="M301.5,163c3.037,0,3.5-2.53,3.5-5.652v-1.695c0-3.122-0.463-5.652-3.5-5.652s-3.5,2.53-3.5,5.652v1.695    C298,160.47,298.463,163,301.5,163z M282,151c-0.241-0.664-0.673-2-1.94-2c-1.267,0-1.879,1.034-2.06,2s-1,8-1,8h6    C283,159,282.241,151.664,282,151z M255.5,81.014C150.29,81.717,65,149.443,65,232.286c0,51.827,33.382,97.29,84.137,123.897    C146.857,379.771,114.188,419.061,113,420c-1.362,1.077-7.796,6.986-1,8c7.132,0.973,80.248-26.123,108.091-49.348    c11.475,1.622,23.308,2.442,35.409,2.361C360.71,380.311,446,312.583,446,229.74C446,146.898,360.71,80.311,255.5,81.014z     M292,155c0-7.933,4.478-10,10-10s9,2.191,9,10v3c0,7.5-3.478,10-9,10s-10-1.759-10-10V155z M275,147c0.604-1.63,3.068-2,5-2    s4.518,0.552,5,2s5,21,5,21h-6l-1-5h-5.423L276,168h-6C270,168,274.396,148.629,275,147z M230,147c0.604-1.63,3.069-2,5-2    s4.517,0.552,5,2s5,21,5,21h-6l-1-5h-5.422L231,168h-6C225,168,229.396,148.629,230,147z M203,145h6v10l7-10h7l-8,11l8,12h-7    l-7-10v10h-6V145z M157,273c0,5.226-3.3,12-10,12s-9.996-5.435-9.996-12s0-65,0-65s-12.227,0-17.004,0s-11-2.834-11-10    s6.066-9,10-9s52.558,0,56,0s10,3.688,10,10s-7.347,9-11,9s-17,0-17,0S157,267.774,157,273z M250,285    c-8.024,2.95-12.938-6.64-14-9s-3.422-10-3.422-10h-37.429c0,0-3.26,10.342-5.148,14s-8.454,6.95-14,4s-5.298-11.05-4-14    s22.168-61.039,25-67.344S204.678,189,214,189s13.422,7.521,16,13.656s24,63.922,25,67.344S258.024,282.05,250,285z M254,158v10    h-6v-23h6v10l7-10h7l-8,11l8,12h-7L254,158z M308,285c-0.976,0-23.935,0-31,0c-0.526,0-1.07-0.043-1.619-0.109    C274.937,284.957,274.479,285,274,285c-6.7,0-9.996-5.435-9.996-12c0-5.418,0-68.398,0-72c0-6.565,3.296-12,9.996-12    s10,6.774,10,12c0,0.955,0,44.616,0,64.004c8.629,0,21.641,0,24,0c6.565,0,12,3.296,12,9.996S313.226,285,308,285z     M392.65,283.679c-5.347,4.038-11.252,1.688-15.209-3.552c-1.228-1.626-13.909-18.416-25.284-33.478    c-2.727,2.727-5.177,5.177-7.157,7.157c0,9.088,0,16.483,0,19.193c0,5.226-3.3,12-10,12s-9.996-5.435-9.996-12    c0-5.418,0-68.398,0-72c0-6.565,3.296-12,9.996-12s10,6.774,10,12c0,0.471,0,11.323,0,24.528    c13.96-13.96,30.836-30.836,32.375-32.376c4.644-4.643,10.816-6.154,15.554-1.417c4.737,4.738,2.281,11.861-1.414,15.557    c-0.422,0.422-12.635,12.635-25.081,25.081c12.206,16.162,26.541,35.143,26.964,35.703    C396.547,272.246,397.996,279.641,392.65,283.679z M201,247h26l-13-38L201,247z M237,151c-0.241-0.664-0.673-2-1.94-2    c-1.268,0-1.879,1.034-2.06,2s-1,8-1,8h6C238,159,237.241,151.664,237,151z"
            fill="#332C2B"
          />
        </g>
      </g>
      <g id="Clip_Light">
        <g>
          <polygon fill="#FFF25B" points="355,354 355,512.02 512,354   " />
        </g>
      </g>
      <g id="Shadow_Clip" opacity="0.102">
        <g>
          <polygon points="198,512 355,512 355,353.98   " />
        </g>
      </g>
    </svg>
  )
}

function IconCopy() {
  return (
    <svg
      fill="none"
      height="20"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="20"
    >
      <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}
