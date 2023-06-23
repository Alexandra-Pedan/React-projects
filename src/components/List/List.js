// import s from './List.module.scss'
import Person from '../Person/Person'
const List = ({ people }) => {
  return (
    <ul>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </ul>
  )
}
export default List
