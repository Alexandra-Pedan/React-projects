import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import s from './Reviews.module.scss'

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  // 1 % 4 === 1
  // 2 % 4 === 2
  // 3 % 4 === 3
  // 4 % 4 === 0

  const nextPerson = () => {
    setIndex((index) => {
      // let newIndex = index + 1;
      // console.log(newIndex);
      // console.log(newIndex % people.length);
      const newValue = (index + 1) % people.length
      console.log(newValue)
      return newValue
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      const newValue = (index - 1 + people.length) % people.length
      return newValue
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    const newIndex = randomNumber % people.length
    // console.log(randomNumber, newIndex);
    setIndex(newIndex)
  }
  return (
    <section>
      <article className={s.review}>
        <div className={s.imgContainer}>
          <img src={image} alt={name} className={s.personImg} />
          <span className={s.quoteIcon}>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className={s.author}>{name}</h4>
        <p className={s.job}>{job}</p>
        <p className={s.info}>{text}</p>
        <div className={s.btnContainer}>
          <button className={s.prevBtn} onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className={s.nextBtn} onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className={`${s.btn} ${s.btnHipster}`} onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </section>
  )
}
export default Reviews
