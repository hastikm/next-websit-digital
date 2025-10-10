import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import styles from './OffCanves.module.css'
import Link from 'next/link'

const OffCanves = () => {
  const [statusMenu, setStatusMenu] = useState('open')
  const [activeSubMenu, setActiveSubMenu] = useState(null)

  const closeMenu = () => setStatusMenu('close')

  const toggleSubMenu = (menuName, hasSubItems, e) => {
    if (hasSubItems) {
      e.preventDefault()
      setActiveSubMenu(activeSubMenu === menuName ? null : menuName)
    }
  }

  const menuItems = [
    {
      name: "لپ تاپ",
      link: "/product/laptops",
      subItems: ["Asus", "HP", "Lenovo", "Apple", "Dell", "MSI"],
    },
    {
      name: "موبایل",
      link: "/product/mobiles",
      subItems: ["Samsung", "Apple", "Xiaomi"],
    },
    {
      name: "تبلت",
      link: "/product/tablets",
      subItems: ["Samsung", "Microsoft", "Apple", "Xiaomi"],
    },
    {
      name: "دوربین",
      link: "/product/cameras",
      subItems: ["Canon", "Nikon"],
    },
    {
      name: "کنسول بازی",
      link: "/product/consoles",
      subItems: ["PlayStation", "Xbox", "Nintendo"],
    },
  ]

  return (
    <aside className={statusMenu === 'open' ? styles.offCanvasMenu : styles.closeMenu}>
      <div className={styles.offCanvasHeader}>
        <h3>مقداد آی تی</h3>
        <IoCloseSharp size="22px" onClick={closeMenu} className={styles.closeIcon} />
      </div>

      <ul className={styles.menuList}>
        {menuItems.map((item) => {
          const hasSubItems = item.subItems && item.subItems.length > 0
          const isActive = activeSubMenu === item.name

          return (
            <li key={item.name} className={styles.menuItem}>
              <div className={styles.menuTitle}>
                <Link
                  href={item.link}
                  onClick={(e) => toggleSubMenu(item.name, hasSubItems, e)}
                >
                  {item.name}
                </Link>
                {hasSubItems && (
                  <IoIosArrowDown
                    onClick={(e) => toggleSubMenu(item.name, hasSubItems, e)}
                    className={`${styles.arrowIcon} ${isActive ? styles.rotateArrow : ''}`}
                  />
                )}
              </div>

              {isActive && (
                <ul className={styles.subMenu}>
                  <li>
                    <Link href={item.link}>مشاهده همه {item.name}</Link>
                  </li>
                  {item.subItems.map((sub) => (
                    <li key={sub}>
                      <Link href={`${item.link}/${sub.toLowerCase()}`}>{sub}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default OffCanves
