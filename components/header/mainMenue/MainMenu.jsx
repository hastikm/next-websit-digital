import React, { useState } from "react";
import styles from "../mainMenue/MainMenu.module.css";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import SubMenu from "../subMenu/SubMenu";

const MainMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      name: "لپ تاپ",
      link: "/product/laptops",
      subItems: ["Asus", "HP", "Lenovo", "Apple", "Dell", "MSI"],
    },
    {
      name: "موبایل",
      link: "/product/mobiles",
      subItems: ["Samsung", "Apple", "Xiaomi", ],
    },
    {
      name: "تبلت",
      link: "/product/tablets",
      subItems: ["Samsung", "microsoft", "Apple" ,"Xiaomi" ],
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
  ];

  const handleEnter = (menuName) => setActiveMenu(menuName);
  const handleLeave = () => setActiveMenu(null);

  return (
    <div className={styles.menu}>
      <div className="container">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              onMouseEnter={() => handleEnter(item.name)}
              onMouseLeave={handleLeave}
              onClick={() =>
                setActiveMenu(activeMenu === item.name ? null : item.name)
              } 
            >
              <Link href={item.link}>{item.name}</Link>
              <IoIosArrowDown />
              {activeMenu === item.name && (
                <SubMenu items={item.subItems} basePath={item.link} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
