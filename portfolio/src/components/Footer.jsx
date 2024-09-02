import React from "react";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
    return (
      <footer>
        <div>
          <img
            src={"https://avatars.githubusercontent.com/u/60815342?v=4"}
            alt="Founder"
          />
  
          <h2>Chestha Jain</h2>
          <p>Web Developer</p>
        </div>
  
        <aside>
          <h2>Social Media</h2>
  
          <article>
          <a href="https://youtube.com/6packprogrammer" target={"blank"}>
              <AiFillGithub />
            </a>
            <a href="https://youtube.com/6packprogrammer" target={"blank"}>
              <AiFillLinkedin />
            </a>
        
          </article>
        </aside>
        <a href="#home">
          <AiOutlineArrowUp />
        </a>
      </footer>
    );
  };
  
  export default Footer;