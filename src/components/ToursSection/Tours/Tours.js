import Tour from '../Tour/Tour'
import s from './Tours.module.scss'
const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className={s.title}>
        <h2>our tours</h2>
        <div className={s.titleUnderline}></div>
      </div>
      <div className={s.tours}>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTours} />
        })}
      </div>
    </section>
  )
}
export default Tours
