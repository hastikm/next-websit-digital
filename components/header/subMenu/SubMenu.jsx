import React from "react";
import Link from "next/link";
import styles from "../subMenu/SubMenu.module.css";

const SubMenu = () => {
  return (
    <div className={styles.submenu}>
      <div className="container">
        <ul>
          <li>
            <Link href={"/product/laptops/asus"}>Asus</Link>
          </li>
          <li>
            <Link href={"/product/laptops/hp"}>HP</Link>
          </li>
          <li>
            <Link href={"/product/laptops/lenovo"}>Lenovo</Link>
          </li>
          <li>
            <Link href={"/product/laptops/apple"}>Apple</Link>
          </li>
          <li>
            <Link href={"/product/laptops/dell"}>Dell</Link>
          </li>
          <li>
            <Link href={"/product/laptops/msi"}>MSI</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;
