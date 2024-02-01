import { useModalContext } from '@contexts/ModalContext'
import { useEffect, useRef, useState } from 'react'
import { Card } from '@/models/card'

export default function AttendCountModal({ party }: { party: Card }) {
  const { open, close } = useModalContext()

  // ref를 통한 값처리=> 리랜더링을 하지않고 값을 잘가져올수있음
  const $input = useRef<HTMLInputElement>(null)

  const haveSeenModal = localStorage.getItem('@have-seen-modal')

  useEffect(() => {
    if (haveSeenModal === 'true') {
      return
    }
    open({
      title: `현재 참석자: ${party.attendCount} 명`,
      body: (
        <div>
          <input
            ref={$input}
            placeholder="참석 가능 인원을 추가해주세요"
            style={{ width: '100%', outline: 'none' }}
            type="number"
          />
        </div>
      ),
      onLeftButtonClick: () => {
        // if (Number($input.current.value) > 0) {
        //   localStorage.setItem('@have-seen-modal', 'true') //@have-seen-modal을 true로 변경하여 로컬에 저장
        //   close()
        // } else {
        //   close()
        // }
        console.log('왼저장값', $input.current)
        localStorage.setItem('@have-seen-modal', 'true') //@have-seen-modal을 true로 변경하여 로컬에 저장
        close()
      },
      onRightButtonClick: async () => {
        if ($input.current == null) {
          return
        }
        await fetch('http://localhost:8888/party', {
          method: 'PUT', // 값을 업데이트해줘야함
          body: JSON.stringify({
            ...party,
            attendCount: party.attendCount + Number($input.current.value),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
    })
  }, [])
  return null
}
