import { useEffect, useState } from 'react'
import s from './ToursSection.module.scss'
import Loading from './Loading/Loading'
import Tours from './Tours/Tours'

const url = 'https://course-api.com/react-tours-project'

const ToursSection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className={s.btn} onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return <Tours tours={tours} removeTours={removeTours} />
}

export default ToursSection
