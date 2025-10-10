import React from "react";
import Link from "next/link";
import styles from "../subMenu/SubMenu.module.css";

const SubMenu = ({ items, basePath }) => {
  return (
    <div className={styles.submenu}>
      <div className="container">
        <ul>
          {items.map((item) => (
            <li key={item}>
              <Link href={`${basePath}/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;
