import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

export default function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  //title이 컴포넌트로받을수있게끔(ReactNode안에 string이 기본적으로포함되어있다.)
  title?: React.ReactNode
}) {
  return (
    <section className={cx(['container', className])}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      {children}
    </section>
  )
}
