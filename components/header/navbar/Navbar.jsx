import React from 'react'
import styles from '../navbar/Navbar.module.css'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
      <div className={styles.navbar}>
        <div className="container">
          <ul>
            <li>
              <GiHamburgerMenu />
            </li>
            <li>
               <Link href='/'> صفحه اصلی</Link> 
            </li>
            <li>
               <Link href='/articls'> مقالات </Link> 
            </li>
            <li>
               <Link href='/about'> درباره ما </Link> 
            </li>
            <li>
               <Link href='/contact'> تماس با ما </Link> 
            </li>
            <li>
               
            </li>
          </ul>
        </div>
      </div>   
     
  )
}

export default Navbar
