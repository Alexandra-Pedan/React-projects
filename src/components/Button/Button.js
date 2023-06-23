import s from './Button.module.scss'
const Button = (props) => {
  const { children } = props
  return (
    <button {...props} className={`${s.btn} ${s.btnBlock}`}>
      {children}
    </button>
  )
}
export default Button
