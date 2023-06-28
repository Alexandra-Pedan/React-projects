import s from './Menu.module.scss'
const Title = ({ text }) => {
  return (
    <div className={s.title}>
      <h2>{text}</h2>
      <div className={s.titleUnderline}></div>
    </div>
  )
}
export default Title
