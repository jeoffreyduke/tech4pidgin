import React, { useEffect, useRef, useState } from "react";
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
  const logo = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const divider = useRef<HTMLDivElement>(null);
  const logoDivider = useRef<HTMLDivElement>(null);
  const iconSpan = useRef<HTMLDivElement>(null);
  const iconSpan2 = useRef<HTMLDivElement>(null);
  const iconSpan3 = useRef<HTMLDivElement>(null);
  const iconSpan4 = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const iconHover = (ref: any, e: string) => {
    if (e === "enter") {
      gsap.to(ref, {
        duration: 0.4,
        height: "1rem",
        ease: "power4.inOut",
      });
    }
    if (e === "leave") {
      gsap.to(ref, {
        duration: 0.4,
        height: "0rem",
        ease: "power4.inOut",
      });
    }
  };

  const handleExpandNav = () => {
    gsap.to(logo.current, {
      duration: 0.4,
      left: "5rem",
      ease: "power4.inOut",
    });
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
    gsap.to(logoDivider.current, {
      duration: 0.4,
      width: "15rem",
      right: "5rem",
      ease: "power4.inOut",
    });

    setOpen(true);
  };

  const handleCollapseNav = () => {
    if (open) {
      gsap.to(logo.current, {
        duration: 0.4,
        left: "0.65rem",
        ease: "power4.inOut",
      });
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
      gsap.to(logoDivider.current, {
        duration: 0.4,
        width: "5rem",
        right: "0.65rem",
        ease: "power4.inOut",
      });
      setOpen(false);
    }
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      <Link href="/">
        <div ref={logo} className={styles.logo}>
          <Image
            src="/assets/logos/white-small.png"
            alt="logo"
            height={20}
            width={60}
            className={styles.logoImg}
          />
          <div ref={logoDivider} className={styles.logoDivider} />
        </div>
      </Link>

      <Link href="/">
        <div className={styles.menuItem}>
          <span ref={iconSpan} className={styles.iconSpan} />

          <div
            className={styles.icon}
            onMouseEnter={() => iconHover(iconSpan.current, "enter")}
            onMouseLeave={() => iconHover(iconSpan.current, "leave")}
          >
            <CottageRounded sx={{ width: 23, height: 23 }} />
          </div>
          <span className={styles.menuLabel}>Home</span>
        </div>
      </Link>

      <Link href="/bookshop">
        <div className={styles.menuItem}>
          <span ref={iconSpan2} className={styles.iconSpan} />

          <div
            className={styles.icon}
            onMouseEnter={() => iconHover(iconSpan2.current, "enter")}
            onMouseLeave={() => iconHover(iconSpan2.current, "leave")}
          >
            <OndemandVideoRounded sx={{ width: 23, height: 23 }} />
          </div>
          <span className={styles.menuLabel}>Class</span>
        </div>
      </Link>

      <Link href="/bookshop">
        <div className={styles.menuItem}>
          <span ref={iconSpan3} className={styles.iconSpan} />

          <div
            className={styles.icon}
            onMouseEnter={() => iconHover(iconSpan3.current, "enter")}
            onMouseLeave={() => iconHover(iconSpan3.current, "leave")}
          >
            <ShoppingCartRounded sx={{ width: 23, height: 23 }} />
          </div>
          <span className={styles.menuLabel}>Cart</span>
        </div>
      </Link>

      <Link href="/bookmarks">
        <div className={styles.menuItem}>
          <span ref={iconSpan4} className={styles.iconSpan} />

          <div
            className={styles.icon}
            onMouseEnter={() => iconHover(iconSpan4.current, "enter")}
            onMouseLeave={() => iconHover(iconSpan4.current, "leave")}
          >
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
        <span className={styles.user}>Lorem Ipsum</span>
      </div>
    </nav>
  );
};

export default Nav;
