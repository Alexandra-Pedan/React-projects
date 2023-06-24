import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import s from '../Accordion.module.scss'

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId
  return (
    <article className={s.question}>
      <div>
        <h5>{title}</h5>
        <button className={s.questionBtn} onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
