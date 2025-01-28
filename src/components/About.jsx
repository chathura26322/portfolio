import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import cover from "../assets/cover.png";
import linkedin from "../assets/linkedin.png";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-justify text-[17px] max-w-3xl leading-[30px]"
        >
          I am a third-year Computer Engineering undergraduate at the University
          of Ruhuna, driven by a passion for solving real-world problems through
          technology. I have a strong foundation in software development and
          enjoy working on projects that combine creativity with practical
          applications. Beyond academics, I’ve actively contributed to the
          university community, organizing workshops and collaborating on
          diverse technical projects. I thrive in environments that encourage
          teamwork and innovation, and I’m always eager to learn and grow. I am
          always looking for opportunities to apply my skills, contribute to
          innovative projects, and grow as a professional in the tech industry.
          I am committed to continuous learning and passionate about using
          technology to make a positive impact.
        </motion.p>
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="flex flex-col items-center gap-6 w-[16rem] h-[16rem] p-[2px] bg-gradient-to-r from-pink-500 via-blue-500 to-teal-500 rounded-full shadow-lg relative"
        >
          <div className="w-full h-full rounded-full bg-[#1d1836]">
            <img
              src={cover}
              alt="Cover Photo"
              className="w-full h-full rounded-full object-cover opacity-[70%] shadow-lg"
            />
          </div>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/chathura26322" // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center text-white hover:bg-blue-700 transition"
          >
            <i className="fab fa-linkedin text-xl"></i>
            <img
              src={linkedin} // Replace with the path to your image
              alt="LinkedIn"
              className="w-full h-full rounded-full object-contain"
            />
          </a>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
