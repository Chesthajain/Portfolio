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
                src={"https://github.com/Chesthajain"}
                alt="gitProfile"
                />
                
                <h2>Chestha Jain</h2>
                <p>Glad you like my profile.</p>
            </div>

            <aside>
                <h2>My Profile</h2>
                <a href="https://www.linkedin.com/in/chestha-jain/" target={"blank"}>
                <AiFillLinkedin /></a>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};

export default Footer;