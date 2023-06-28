import React, { useState } from 'react'
import s from './Menu.module.scss'
import Menu from './Menu'
import Categories from './Categories'
import Title from './Title'
import items from './data'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function MenuSection() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <section className={s.menu}>
      <Title text="our menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  )
}

export default MenuSection
