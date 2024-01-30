import classNames from 'classnames/bind'
import styles from './Map.module.scss'
import Section from '@shared/Section'
import { useEffect, useRef } from 'react'
import { Location } from '@models/card'

const cx = classNames.bind(styles)
declare global {
  interface Window {
    kakao: any
  }
}

export default function Map({ location }: { location: Location }) {
  const mapContainer = useRef(null)
  // 비동기로 불러오기위해 useEffect안에 api를 불러옴
  useEffect(() => {
    // 스크립트불러와줌
    // autoload=false함으로써 자동로드가아닌 내가 원하는시점에 불러와줌(싱크맞추기위함)
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    // 비동기로 불러올거기때문에 async =true(랜더링을 방해하지않음)
    script.async = true
    document.head.appendChild(script)
    script.onload = () => {
      //스크립트를 불러온시점(onload)에 kakao map을 로드
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3, //줌레벨
        }
        const marker = new window.kakao.maps.Marker({
          position,
        })
        const map = new window.kakao.maps.Map(mapContainer.current, options)
        marker.setMap(map)
      })
    }
  }, [])
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>오시는길</span>
          <span className={cx('txt-sub')}>{location.name}</span>
          <span className={cx('txt-sub')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
        {/* 클릭시 새탭으로 target='_blank' */}
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>

      <div>
        <WayToCome way="버스" label={IconBus()} list={location.waytocome.bus} />
        <WayToCome
          way="지하철"
          label={IconSubway()}
          list={location.waytocome.metro}
        />
      </div>
    </Section>
  )
}

function WayToCome({
  way,
  label,
  list,
}: {
  label: React.ReactNode
  list: string[]
  way: string
}) {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>
        {label}
        <span>{way}</span>
      </div>
      <ul>
        {list.map((way) => (
          <li>{way}</li>
        ))}
      </ul>
    </div>
  )
}

function IconBus() {
  return (
    <svg height="20" viewBox="0 0 48 48" width="20">
      <path d="M0 0h48v48h-48z" fill="none" />
      <path d="M8 32c0 1.77.78 3.34 2 4.44v3.56c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h16v2c0 1.1.89 2 2 2h2c1.1 0 2-.9 2-2v-3.56c1.22-1.1 2-2.67 2-4.44v-20c0-7-7.16-8-16-8s-16 1-16 8v20zm7 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm18 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-12h-24v-10h24v10z" />
    </svg>
  )
}

function IconSubway() {
  return (
    <svg height="20" width="20" viewBox="0 0 448 512">
      <path d="M352 0C405 0 448 42.98 448 96V352C448 399.1 412.8 439.7 366.9 446.9L412.9 492.9C419.9 499.9 414.9 512 404.1 512H365.3C356.8 512 348.6 508.6 342.6 502.6L288 448H160L105.4 502.6C99.37 508.6 91.23 512 82.75 512H43.04C33.06 512 28.06 499.9 35.12 492.9L81.14 446.9C35.18 439.7 0 399.1 0 352V96C0 42.98 42.98 0 96 0H352zM64 224C64 241.7 78.33 256 96 256H176C193.7 256 208 241.7 208 224V128C208 110.3 193.7 96 176 96H96C78.33 96 64 110.3 64 128V224zM272 96C254.3 96 240 110.3 240 128V224C240 241.7 254.3 256 272 256H352C369.7 256 384 241.7 384 224V128C384 110.3 369.7 96 352 96H272zM96 320C78.33 320 64 334.3 64 352C64 369.7 78.33 384 96 384C113.7 384 128 369.7 128 352C128 334.3 113.7 320 96 320zM352 384C369.7 384 384 369.7 384 352C384 334.3 369.7 320 352 320C334.3 320 320 334.3 320 352C320 369.7 334.3 384 352 384z" />
    </svg>
  )
}
