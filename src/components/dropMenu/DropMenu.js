import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './dropMenu.module.scss';
import { ReactComponent as Puzzle } from '../../ui/puzzle.svg';

const { navList, navLink, navLinkActive } = styles;

const DropMenu = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={navList}>
        <li>
          <ul className={styles.logoWrapper}>
            <li className={styles.logoLink}>
              <NavLink
                to="#"
                exact
                className={navLink}
                activeClassName={navLinkActive}
              >
                <Puzzle />
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={styles.navListItem}>
          <ul className={styles.navListWrapper}>
            <li className={styles.navListItemWrapper}>
              <NavLink
                to="#"
                exact
                className={navLink}
                activeClassName={navLinkActive}
              >
                link a
              </NavLink>
            </li>
            <li className={styles.navListItemWrapper}>
              <NavLink
                to="#"
                className={navLink}
                activeClassName={navLinkActive}
              >
                link b
              </NavLink>
            </li>
            <li className={styles.navListItemWrapper}>
              <NavLink
                to="#"
                className={navLink}
                activeClassName={navLinkActive}
              >
                link c
              </NavLink>
            </li>
            <li className={styles.navListItemWrapper}>
              <NavLink
                to="#"
                className={navLink}
                activeClassName={navLinkActive}
              >
                link d
              </NavLink>
            </li>
            <li className={styles.navListItemWrapper}>
              <NavLink
                to="#"
                className={navLink}
                activeClassName={navLinkActive}
              >
                link h
              </NavLink>
            </li>
            <li className={styles.navListItemWrapper}>
              <NavLink
                to="#"
                className={navLink}
                activeClassName={navLinkActive}
              >
                link y
              </NavLink>
            </li>
            <li className={styles.navListItemWrapper}>
              <NavLink
                to="#"
                className={navLink}
                activeClassName={navLinkActive}
              >
                link z
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      {/* <div className={styles.rightBar}></div> */}
    </nav>
    // <nav className={styles.navContainer}>
    //   <ul className={styles}>
    //     <li>
    //       <NavLink
    //         to="#"
    //         exact
    //         className={styles.navLink}
    //         activeClassName={styles.navLinkActive}
    //       >
    //         <Puzzle />
    //       </NavLink>
    //     </li>
    //   </ul>
    //   <ul className={styles.navListWrapper}>
    //     <li>
    //       <NavLink
    //         to="#"
    //         exact
    //         className={styles.navLink}
    //         activeClassName={styles.navLinkActive}
    //       >
    //         link a
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="#"
    //         exact
    //         className={styles.navLink}
    //         activeClassName={styles.navLinkActive}
    //       >
    //         link b
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="#"
    //         exact
    //         className={styles.navLink}
    //         activeClassName={styles.navLinkActive}
    //       >
    //         link c
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="#"
    //         exact
    //         className={styles.navLink}
    //         activeClassName={styles.navLinkActive}
    //       >
    //         link d
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="#"
    //         exact
    //         className={styles.navLink}
    //         activeClassName={styles.navLinkActive}
    //       >
    //         link h
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="#"
    //         exact
    //         className={styles.navLink}
    //         activeClassName={styles.navLinkActive}
    //       >
    //         link y
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="#"
    //         exact
    //         className={styles.navLink}
    //         activeClassName={styles.navLinkActive}
    //       >
    //         link z
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default DropMenu;
