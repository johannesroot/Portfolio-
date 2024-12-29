import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { DiGit, DiAws } from 'react-icons/di';
import { SiExpress, SiFirebase } from 'react-icons/si';
import styles from './Skill.module.css';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Responsive Web Design', icon: <FaCss3Alt /> },
  { name: 'Bootstrap', icon: <FaCss3Alt /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'REST APIs', icon: <FaJs /> },
  { name: 'Authentication & Authorization', icon: <FaJs /> },
  { name: 'Database Management (SQL/NoSQL)', icon: <FaDatabase /> },
  { name: 'Git and GitHub', icon: <DiGit /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Data Structures', icon: <FaJs /> },
  { name: 'Algorithms', icon: <FaJs /> },
  { name: 'Communication and teamwork skills', icon: <FaJs /> },
];

const Skill = () => {
  return (
    <div className={styles.skillsContainer} id="skills">
      <h1 className={styles.title}>My Skills</h1>
      <div className={styles.skillGrid}>
        {skills.map((skill, index) => (
          <div className={styles.skillBox} key={index}>
            <div className={styles.icon}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
