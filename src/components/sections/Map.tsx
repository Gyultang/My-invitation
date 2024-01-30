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
    </Section>
  )
}
