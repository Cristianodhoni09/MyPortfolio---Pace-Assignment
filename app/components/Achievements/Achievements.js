'use client';

import styles from './achievements.module.css';
import { useState } from 'react';

export default function Achievements() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/achievement1.jpeg',
    '/images/achievement2.jpg',
    '/images/achievement3.jpg',
  ];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="achievements" className={styles.container}>
      <h2 className={styles.heading}>Achievements</h2>
      <div className={styles.content}>
        {/* Left Section - Text */}
        <div className={styles.textSection}>
          <p className={styles.intro}>
            I am a passionate React developer with experience in building dynamic and scalable web applications. 
            I enjoy solving challenging problems, developing innovative solutions, and contributing to impactful projects.
            I have also participated in a robotics competition, where I was part of a team that designed algorithms for a robot 
            that could navigate through a warehouse.
          </p>
          <ul>
            <li>• Achieved a rank of 12 out of 345+ teams in E-Yantra robotics competition (e-YRC 2023) held by IIT Bombay.</li>
            <li>• Runner-up in the Guardian Drone competition held by Aero club MNNIT.</li>
            <li>• Solved 250+ problems on Leetcode.</li>
            <li>• Solved 250+ problems on Codeforces.</li>
            <li>• Developed multiple projects like Paste, Shopkart, Cosmo Logistics, and more.</li>
          </ul>
        </div>

        {/* Right Section - Image Carousel */}
        <div className={styles.imageSection}>
          <button className={styles.arrowButton} onClick={handlePrev}>
            &#8592;
          </button>
          <div className={styles.imageContainer}>
            <img src={images[currentImage]} alt={`Achievement ${currentImage + 1}`} />
          </div>
          <button className={styles.arrowButton} onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
