import { useState } from 'react'
import data from '../data'
import Questions from './Questions'
const Accordion = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id
    return setActiveId(newActiveId)
  }
  return (
    <Questions
      questions={questions}
      activeId={activeId}
      toggleQuestion={toggleQuestion}
    />
  )
}
export default Accordion
