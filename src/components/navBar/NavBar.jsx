import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.header}>
      <div className={styles['header__logo']}>
        <h1>{'BlogZee'}</h1>
      </div>
      <ul className={styles['header__menu']}>
        <li>
          <Link to={`/`}>{'Home'}</Link>
        </li>
        <li>
          <a href="#">{'News'}</a>
        </li>
        <li>
          <a href="#">{'Contact'}</a>
        </li>
        <li>
          <a href="#">{'About'}</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
