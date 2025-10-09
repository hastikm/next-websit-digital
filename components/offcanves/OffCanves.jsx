import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import styles from './OffCanves.module.css';
import Link from 'next/link';

const OffCanves = () => {
  const [StatusMenue, setStatusMenue] = useState('open') 

  const closeMenue = () => {
    setStatusMenue('close')
  }

  return (
    <div>
      <aside className={StatusMenue === 'open' ? styles.offCanvasMenu : styles.closeMenu}>
        <div className={styles.offCanvasHeader}>
          <h3>مقداد آی تی</h3>
          <IoCloseSharp size='20px' onClick={closeMenue} />
        </div>
        <ul>
          <li>
             <Link href='/product/laptops'>لپ تاپ</Link>
             <IoIosArrowDown />
          </li>
          <li>
             <Link href='/product/mobiles'>موبایل</Link>
             <IoIosArrowDown />
          </li>
          <li>
             <Link href='/product/camera'>دوربین</Link>
             <IoIosArrowDown />
          </li>
          <li>
             <Link href='/product/console'>کنسول بازی</Link>
             <IoIosArrowDown />
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default OffCanves
