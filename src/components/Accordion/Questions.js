import SingleQuestion from './SingleQuestion'

const Questions = ({ questions }) => {
  return (
    <section>
      <h2>Questions</h2>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />
      })}
    </section>
  )
}
export default Questions
