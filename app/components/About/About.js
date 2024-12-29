import styles from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className={styles.profile}
        />
        <div className={styles.content}>
          <h2>About Me</h2>
          <p>
            I am currently pursuing a B.Tech in Mechanical Engineering from the National Institute of Technology, 
            Allahabad, with a CGPA of 7.81. My passion for technology has driven me to explore and excel in various 
            domains such as software development, full-stack development, data structures and algorithms, and robotics. 
            I have hands-on experience with modern technologies and frameworks, including ReactJS, Redux Toolkit, Python,
            ROS2, and MongoDB, and have built several innovative projects like Paste, ShopKart, and Cosmo Logistics. These 
            projects showcase my ability to develop scalable web applications, optimize user experiences, and integrate 
            advanced robotics systems.
          </p>
          <button className={styles.resumeButton}>
            <a href="/files/resume.pdf" download="Amit_Resume.pdf">
              Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
