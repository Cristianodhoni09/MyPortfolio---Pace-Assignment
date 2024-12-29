import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        &lt;Amit Kumar /&gt;
      </div>
      <div className={styles.links}>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#achievements">Achievements</a>
      </div>
    </nav>
  );
}
