import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import Section from '@shared/Section'
import Accordion from '../shared/Accordion'
import { Person, Card } from '@/models/card'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

export default function Contact({ master }: { master: Card['bride'] }) {
  return (
    <Section title="연락처 및 마음전하기">
      <Accordion label="파티장">
        <ContactInfo
          name={master.name}
          account={master.account}
          phoneNumber={master.phoneNumber}
        />
        <ContactInfo
          name={master.parents[0].name}
          account={master.parents[0].account}
          phoneNumber={master.parents[0].phoneNumber}
        />
        <ContactInfo
          name={master.parents[1].name}
          account={master.parents[1].account}
          phoneNumber={master.parents[1].phoneNumber}
        />
      </Accordion>
    </Section>
  )
}

function ContactInfo({ name, account, phoneNumber }: Person) {
  return (
    <div className={cx('wrap-contact')}>
      <div className={cx('wrap-info')}>
        {/* 정보 */}

        <span>{` ${account.bankName} | ${account.accountNumber}`}</span>
        <span>{name}</span>
      </div>
      <div>
        {/* 버튼 */}
        <ul className={cx('wrap-buttons')}>
          <li>
            <a href={`tel: ${phoneNumber}`} className={cx('btn')}>
              전화
            </a>
          </li>
          <li>
            <CopyToClipboard
              text={`${account.bankName} ${account.accountNumber}`}
              onCopy={() => {
                alert('복사가 완료되었습니다.')
              }}
            >
              {' '}
              <button className={cx('btn')}>계좌복사</button>
            </CopyToClipboard>
          </li>
          {account.kakaopayLink != null ? (
            <li>
              <a
                className={cx('btn')}
                href={account.kakaopayLink}
                target="_blank"
                rel="noreferrer"
              >
                송금
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  )
}
