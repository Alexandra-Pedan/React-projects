import React, { useState } from 'react'
import s from '../Tours/Tours.module.scss'
const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className={s.singleTour}>
      <div className={s.img}>
        <img src={image} alt={name} />
      </div>

      <span className={s.tourPrice}>${price}</span>
      <div className={s.tourInfo}>
        <h5>{name}</h5>

        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className={s.infoBtn} onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button
          className={`${s.deleteBtn} ${s.btnBlock} ${s.btn}`}
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  )
}

export default Tour
