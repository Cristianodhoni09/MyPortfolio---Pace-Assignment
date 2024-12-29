import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Amit Kumar. All rights reserved.</p>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#header">Contact</a>
      </div>
    </footer>
  );
}
