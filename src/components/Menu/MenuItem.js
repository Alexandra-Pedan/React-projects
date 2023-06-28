import s from './Menu.module.scss'
const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className={s.menuItem}>
      <img src={img} alt={title} className={s.img} />
      <div className={s.itemInfo}>
        <div>
          <h5>{title}</h5>
          <span className={s.itemPrice}>${price}</span>
        </div>
        <p className={s.itemText}>{desc}</p>
      </div>
    </article>
  )
}
export default MenuItem
