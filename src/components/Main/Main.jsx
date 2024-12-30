import React from "react";
import './Main.css';
import john from "../../assets/image/joo.jpg";

const Main = ({ isMenuOpen }) => {
  return (
    <main
      className="main-container"
      id="main"
      style={{
        marginTop: isMenuOpen ? "430px" : "100px", // Adjust dynamically based on menu state
        
      }}
    >
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
};

export default Main;
