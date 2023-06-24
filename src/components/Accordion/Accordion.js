import { useState } from 'react'
import data from './data'
import Questions from './Questions'
const Accordion = () => {
  const [questions, setQuestions] = useState(data)
  return <Questions questions={questions} />
}
export default Accordion
