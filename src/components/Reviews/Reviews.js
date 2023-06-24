import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import s from './Reviews.module.scss'

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      // if (newIndex > people.length - 1) {
      //   return 0
      // }
      // return newIndex
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      // if (newIndex < 0) {
      //   return people.length - 1
      // }
      // return newIndex
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
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
