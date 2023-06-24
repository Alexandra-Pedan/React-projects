import SingleQuestion from './SingleQuestion'

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section>
      <h2>Questions</h2>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}
export default Questions
