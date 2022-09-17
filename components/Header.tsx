import React from "react";
import styles from "../styles/Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div>
      <header className={styles.Header}>
        <div className={styles.headerCon}>
          <div className={styles.search}>
            <button type="submit" id="submit">
              <SearchIcon sx={{ width: 18, height: 18 }} />
            </button>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Find a course"
            />
          </div>

          <div className={styles.profile}>
            <ChatBubbleRoundedIcon sx={{ width: 20, height: 20 }} />
            <NotificationsRoundedIcon sx={{ width: 21, height: 21 }} />
            <div className={styles.divider}></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
