import styles from './project.module.css';

export default function ProjectCard({ title, description, techStack, github, demo }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.techStack}>Tech Stack: {techStack.join(', ')}</p>
      <div className={styles.links}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
}
