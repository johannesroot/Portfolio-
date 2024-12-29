import React from "react";
import styles from "./Project.module.css";
import img1 from '../../assets/image/10001.jpg';
import img2 from '../../assets/image/10002.jpeg';
import img3 from '../../assets/image/10003.jpg';
import img4 from '../../assets/image/10004.jpeg';
import img5 from '../../assets/image/gemini.jpg';
import img6 from '../../assets/image/evan.png';

const Project = () => {
  const projects = [
    {
      id: 1,
      image: img1,
      message:"Amazon Clone.",
      deployedLink: "https://amazon-clone-by-john.netlify.app/",
      githubLink: "https://github.com/johannesroot/Amazon-Clone.git",
     
    },
    {
      id: 2,
      image: img2,
      message:"Apple Clone.",
      deployedLink: "https://app-le-clone.netlify.app/",
      githubLink: "https://github.com/johannesroot/Apple.git",
    },
    {
      id: 3,
      image:img3,
      message:"Netflix Clone.",
      deployedLink: "https://neetflix-clone-by-john.netlify.app/",
      githubLink: "https://github.com/johannesroot/Netflix-Clone.git",
    },
    {
      id: 4,
      image: img4,
      message:"Smake Game.",
      deployedLink: "https://snake-ga-me.netlify.app/",
      githubLink: "https://github.com/johannesroot/SnakeGame.git",
    },
    {
        id: 5,
        image: img5,
        message:"Gemini Clone.",
        deployedLink: "https://gemini-clone-john.netlify.app/",
        githubLink: "https://github.com/johannesroot/Gemini-Clone.git",
      },
      {
        id: 6,
        image: img6,
        message:"Evangadi Forum.",
        deployedLink: "https://evangadi-forum-by-john.netlify.app/",
        githubLink: "https://github.com/johannesroot/Evangadi-ForumFrontEnd.git",
      },
  ];

  return (
    <div className={styles.projectContainer} id="projects">
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>{project.message}</span>
              </div>
            </div>
            <div className={styles.links}>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                View Deployment
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
