import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>MovieCenter</h1>

        <ul className={styles.navWrapper}>
          {user?.name && <li className={styles.welcome}>Hi, {user.name}</li>}

          <li>
            <NavLink to="/">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;