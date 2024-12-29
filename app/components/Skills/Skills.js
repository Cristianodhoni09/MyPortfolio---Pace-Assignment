'use client';

import styles from './skills.module.css';
import { useState } from 'react';

export default function Skills() {
  const [activeSection, setActiveSection] = useState('technical');

  const technicalSkills = [
    { name: 'HTML/CSS', rating: 6 },
    { name: 'React', rating: 8 },
    { name: 'Next.js', rating: 6.5 },
    { name: 'JavaScript', rating: 8 },
    { name: 'DSA', rating: 9 },
  ];

  const softSkills = [
    { name: 'Communication', rating: 8 },
    { name: 'Problem-solving', rating: 9 },
    { name: 'Leadership', rating: 7 },
    { name: 'Teamwork', rating: 8 },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => setActiveSection('technical')}>Technical</button>
        <button className={styles.button} onClick={() => setActiveSection('soft')}>Soft</button>
      </div>
      <div className={styles.list}>
        {(activeSection === 'technical' ? technicalSkills : softSkills).map((skill, index) => (
          <div key={index} className={styles.skill}>
            <span>{skill.name}</span>
            <div className={styles.bar}>
              <div style={{ width: `${skill.rating * 10}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
