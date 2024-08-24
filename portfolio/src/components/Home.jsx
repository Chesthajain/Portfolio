import React, { useRef } from 'react';
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from '../assets/logo.png';

const Home = ({ ratio }) => {
    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        });
    };
    const animationProjectsCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
    };

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        }
    }
}

export default Home