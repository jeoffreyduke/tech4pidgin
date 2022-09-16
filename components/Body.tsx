import React from "react";
import styles from "../styles/Body.module.css";
import Link from "next/link";
import {
  CottageRounded,
  ScienceRounded,
  Groups2Rounded,
  ShoppingCartRounded,
  BookmarkRounded,
  DriveFileRenameOutlineRounded,
} from "@mui/icons-material/";
import { Avatar, Tooltip } from "@mui/material";

interface BodyProps {
  Midcomp: JSX.Element;
}

const Body = ({ Midcomp }: BodyProps) => {
  return (
    <div className={styles.Body}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <Tooltip title="Home" placement="right" arrow>
                <CottageRounded sx={{ width: 23, height: 23 }} />
              </Tooltip>
            </Link>
          </li>
          <li>
            <Tooltip title="Science" placement="right" arrow>
              <ScienceRounded sx={{ width: 23, height: 23 }} />
            </Tooltip>
          </li>
          <li>
            <Link href="/bookclubs">
              <Tooltip title="Bookclubs" placement="right" arrow>
                <Groups2Rounded sx={{ width: 23, height: 23 }} />
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link href="/bookshop">
              <Tooltip title="Bookshop" placement="right" arrow>
                <ShoppingCartRounded sx={{ width: 23, height: 23 }} />
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link href="/bookmarks">
              <Tooltip title="Bookmarks" placement="right" arrow>
                <BookmarkRounded sx={{ width: 23, height: 23 }} />
              </Tooltip>
            </Link>
          </li>
          <div className={styles.divider} />
        </ul>

        <div className={styles.create}>
          <DriveFileRenameOutlineRounded sx={{ width: 28, height: 28 }} />
        </div>
      </nav>
      <main className={styles.main}>{Midcomp}</main>
    </div>
  );
};

export default Body;
