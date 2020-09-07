import React, { useState } from 'react';
import styles from './header.module.scss';
import { ReactComponent as Search } from '../../ui/search.svg';
import { ReactComponent as Text } from '../../ui/text.svg';
import { ReactComponent as Bell } from '../../ui/bell.svg';
import { ReactComponent as Puzzle } from '../../ui/puzzle.svg';

import { ReactComponent as CoverPhoto } from '../../ui/photoCover.svg';
import DropMenu from '../dropMenu/DropMenu';
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={` ${styles.header}  container`}>
      <div className={styles.logo} open={open} onClick={() => setOpen(!open)}>
        <Puzzle />
        {open && <DropMenu />}
      </div>
      <div className={styles.nav}>
        <div>
          <Search />
        </div>
        <div>
          <Text />
          <Bell />
          <CoverPhoto />
        </div>
      </div>
    </header>
  );
};
export default Header;
