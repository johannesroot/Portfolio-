import React from "react";
import './Main.css';
import john from "../../assets/image/joo.jpg";  // Correct path to the image

const Main = () => {
  return (
    <main className="main-container">
      <div className="text-container">
        <p className="greeting">Hello</p>
        <h1 className="name">Yohannes Gigar</h1>
        <h3 className="profession">Full Stack Developer</h3>
      </div>
      <div className="image-container">
        <img src={john} alt="Profile" className="profile-image" />
      </div>
    </main>
  );
}

export default Main;
