import './Birthday.module.scss'
import { useState } from 'react'
import data from '../../data/data'
import List from '../List/List'
import Button from '../Button/Button'
const Birthday = () => {
  const [people, setPeople] = useState(data)
  console.log(people)
  return (
    <section>
      <h2>{people.length} birthdays today</h2>
      <List people={people} />
      <Button
        type="button"
        title={'clear all'}
        onClick={() => {
          setPeople([])
        }}
      >
        clear all
      </Button>
    </section>
  )
}
export default Birthday
