import React from 'react'
import s from './Menu.module.scss'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={s.btnContainer}>
      {categories.map((category) => {
        return (
          <button
            type="button"
            className={s.btn}
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
