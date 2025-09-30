import React, { useState } from "react";
import styles from "../mainMenue/MainMenu.module.css";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import SubMenu from "../subMenu/SubMenu";

const MainMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div className={styles.menu}>
      <div className="container">
        <ul>
          <li
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            <Link href="/product/laptops">لپ تاپ</Link>
            <IoIosArrowDown />
            {showSubMenu && <SubMenu />}
          </li>

          <li>
            <Link href="/product/mobiles">موبایل</Link>
            <IoIosArrowDown />
          </li>
          <li>
            <Link href="/product/tablet">تبلت</Link>
            <IoIosArrowDown />
          </li>
          <li>
            <Link href="/product/camera">دوربین</Link>
            <IoIosArrowDown />
          </li>
          <li>
            <Link href="/product/console">کنسول بازی</Link>
            <IoIosArrowDown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
