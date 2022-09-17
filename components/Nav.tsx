import React from "react";
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

const Nav = () => {
  return (
    <nav className={styles.nav}>
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

      <ul>
        <li>
          <Link href="/">
            <CottageRounded sx={{ width: 23, height: 23 }} />
          </Link>
        </li>
        <li>
          <Link href="/bookshop">
            <OndemandVideoRounded sx={{ width: 23, height: 23 }} />
          </Link>
        </li>
        <li>
          <Link href="/bookshop">
            <ShoppingCartRounded sx={{ width: 23, height: 23 }} />
          </Link>
        </li>
        <li>
          <Link href="/bookmarks">
            <FavoriteRounded sx={{ width: 23, height: 23 }} />
          </Link>
        </li>
        <div className={styles.divider} />
      </ul>

      <div className={styles.profile}>
        <Avatar
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
