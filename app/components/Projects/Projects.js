import styles from './project.module.css';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Paste App',
      description: 'A React-based app for managing notes and code snippets.',
      techStack: ['ReactJS', 'Redux Toolkit', 'Tailwind CSS'],
      github: 'https://github.com/Cristianodhoni09/React-Paste-App',
      demo: 'https://react-paste-app-7qw2.vercel.app/',
    },
    {
      title: 'ShopKart',
      description: 'An e-commerce app with secure routing and dashboards.',
      techStack: ['ReactJS', 'Context API', 'Bootstrap'],
      github: 'https://github.com/Cristianodhoni09/',
      demo: 'https://demo.com',
    },
    {
      title: 'Cosmo Logistics',
      description: 'A logistics system using ROS2 and SLAM with autonomous navigation.',
      techStack: ['Python', 'ROS2', 'Gazebo', 'Nav2'],
      github: 'https://github.com/Cristianodhoni09/Cosmo-Logistics',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
