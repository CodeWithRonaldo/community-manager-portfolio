import React from "react";
import {
  FaTelegram,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <h1 className="title">
          I build & Manage <br />
        </h1>
        <h1 className="crypto">
          {" "}
          <span>Crypto Communities</span>
        </h1>
        <p>
          Community Manager | Community Lead | Community Builder | Crypto
          Enthusiast | Discord Technician | Help Web3 Communities become fun
          again 😉
        </p>
      </div>
      <div className="social-links">
        <a href="https://github.com/CodeWithRonaldo">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/in/abdulkudus-akanji-babatunde-18956b221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <FaLinkedin />
        </a>
        <a href="https://t.me/ronaldo01477">
          <FaTelegram />
        </a>
        <a href="https://x.com/ronaldo01477?s=21&t=YAZq3zDAyusnepOu9utCDg">
          <FaTwitterSquare />
        </a>
      </div>
      <div className="contact-btn">
        <button>Contact me</button>
      </div>
    </>
  );
}

export default Hero;
