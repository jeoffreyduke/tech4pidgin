import React, { useRef, useState } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  CottageRounded,
  OndemandVideoRounded,
  ShoppingCartRounded,
  FavoriteRounded,
} from "@mui/icons-material/";
import { Avatar } from "@mui/material";
import { gsap } from "gsap";

const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const divider = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleExpandNav = () => {
    gsap.to(navRef.current, {
      duration: 0.4,
      width: "15rem",
      ease: "power4.inOut",
    });
    gsap.to(divider.current, {
      duration: 0.4,
      width: "12rem",
      ease: "power4.inOut",
    });
    setOpen(true);
  };

  const handleCollapseNav = () => {
    if (open) {
      gsap.to(navRef.current, {
        duration: 0.4,
        width: "5rem",
        ease: "power4.inOut",
      });
      gsap.to(divider.current, {
        duration: 0.4,
        width: "2rem",
        ease: "power4.inOut",
      });
      setOpen(false);
    }
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      <Link href="/">
        <div className={styles.logo}>
          <Image
            src="/assets/logos/white-small.png"
            alt="logo"
            height={20}
            width={60}
          />
          <div className={styles.logoDivider} />
        </div>
      </Link>

      <Link href="/">
        <div className={styles.menuItem}>
          <div className={styles.icon}>
            <CottageRounded sx={{ width: 23, height: 23 }} />
          </div>
          <span className={styles.menuLabel}>Home</span>
        </div>
      </Link>

      <Link href="/bookshop">
        <div className={styles.menuItem}>
          <div className={styles.icon}>
            <OndemandVideoRounded sx={{ width: 23, height: 23 }} />
          </div>
          <span className={styles.menuLabel}>Class</span>
        </div>
      </Link>

      <Link href="/bookshop">
        <div className={styles.menuItem}>
          <div className={styles.icon}>
            <ShoppingCartRounded sx={{ width: 23, height: 23 }} />
          </div>
          <span className={styles.menuLabel}>Cart</span>
        </div>
      </Link>

      <Link href="/bookmarks">
        <div className={styles.menuItem}>
          <div className={styles.icon}>
            <FavoriteRounded sx={{ width: 23, height: 23 }} />
          </div>
          <span className={styles.menuLabel}>Saved</span>
        </div>
      </Link>

      <div className={styles.divider} ref={divider} />

      <div
        className={styles.profile}
        onClick={open ? handleCollapseNav : handleExpandNav}
      >
        <Avatar
          src="/assets/pageImages/dp.jpg"
          alt={"user.name"}
          sx={{
            height: "38px",
            width: "38px",
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
