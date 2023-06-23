import s from './Person.module.scss'
const Person = ({ image, name, age }) => {
  return (
    <li className={s.person}>
      <img src={image} alt={name} className={s.img} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </li>
  )
}
export default Person
