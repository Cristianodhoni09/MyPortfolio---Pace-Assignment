import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Amit Kumar</h1>
      <h2 className={styles.headerContent}>This is my portfolio!</h2>
      <div className={styles.icons}>
        <a href="https://github.com/Cristianodhoni09?tab=repositories" target="_blank">
          <img src="/images/github-icon.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/amit-kumar-b35426220/" target="_blank">
          <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src="/images/twitter-icon.svg" alt="Twitter" />
        </a>
      </div>
      <button className={styles.button}>
        <a href="#about">About Me</a>
      </button>
    </header>
  );
}
