"use client";

import React, { useState } from "react";
import Image from 'next/image';
import NavLink from "../navLink/NavLink"; 
import styles from "./links.module.css";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "What We Do", path: "/whatwedo" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // Temporary - replace with real auth data later
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {!session && (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}

         {session && isAdmin && (
          <NavLink item={{ title: "Admin", path: "/admin" }} />
        )}

        {session && (
          <button className={styles.logout}>Logout</button>
        )}
      </div>

      <Image 
        className={styles.menuButton}
        src="/menu.png" 
        alt="Hamburger menu" 
        width={30} 
        height={30} 
        onClick={() => setOpen((prev) => !prev)} 
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;