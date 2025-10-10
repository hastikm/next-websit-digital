import React, { useContext } from 'react'
import styles from '../navbar/Navbar.module.css'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { AppContext } from '@/pages/_app';

function Navbar() {
   const { setMenuStatus } = useContext(AppContext)

   const toggleMenu = () => {
      setMenuStatus(prev => prev === "open" ? "closed" : "open")
   }

   return (
      <div className={styles.navbar}>
         <div className='container'>
            <ul>
               <li>
                  <GiHamburgerMenu size='20px' onClick={toggleMenu} />
               </li>
               <li>
                  <Link href='/'>صفحه اصلی</Link>
               </li>
         
               <li>
                  <Link href='/about'>درباره ما</Link>
               </li>
               <li>
                  <Link href='/contact'>تماس با ما</Link>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Navbar
