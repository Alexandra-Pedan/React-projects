import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import s from './Accordion.module.scss'
const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className={s.question}>
      <div>
        <h5>{title}</h5>
        <button
          className={s.questionBtn}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </article>
  )
}
export default SingleQuestion
