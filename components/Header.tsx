import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div>
      <header className={styles.Header}>
        <div className={styles.headerCon}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                src="/assets/logo.png"
                alt="logo"
                height={45}
                width={105}
              />
            </div>
          </Link>
          <div className={styles.search}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Inkfinity"
            />
            <button type="submit" id="submit">
              <SearchIcon sx={{ width: 18, height: 18 }} />
            </button>
          </div>

          <div className={styles.profile}>
            <ChatBubbleRoundedIcon sx={{ width: 20, height: 20 }} />
            <NotificationsRoundedIcon sx={{ width: 21, height: 21 }} />
            <div className={styles.divider}></div>
            <Avatar
              alt={"user.name"}
              sx={{
                height: "26px",
                width: "26px",
                position: "relative",
                bottom: "3.5px",
                right: "1rem",
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
