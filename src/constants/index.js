import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";
import csharp from "../assets/tech/csharp.png";
import flutter from "../assets/tech/flutter.png";
import python from "../assets/tech/python.png";
import vote from '../assets/company/vote.png';
import fooddel from '../assets/company/fooddel.png';
import weather from '../assets/company/weather.png';
import weatherBanner from '../assets/weather.png';
import publicpulse from '../assets/publicpulse.png';
import fooddelBanner from '../assets/fooddel.png';
import tharanga from '../assets/tharanga.png';
import piumal from '../assets/piumal.png';
import pasindu from '../assets/pasindu.png';
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const experiences = [
  {
    title: "Public Pulse",
    company_name: "Flutter, React JS, Firebase, Python",
    icon: vote,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developed a decentralized app using Web3 technology to enable secure and anonymous voting on policy opinions.",
      "Wrote and deployed smart contracts to manage voting and data transparency on the blockchain",
      "Created an intuitive UI with React for seamless user interaction and engagement.",
    ],
  },
  {
    title: "FoodDel ",
    company_name: "MERN Stack",
    icon: fooddel,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - May 2024",
    points: [
      "Developed a responsive and user-friendly interface using React and Tailwind CSS.",
      "Built RESTful APIs with Node.js and Express.js to handle user data, product listings, and orders",
      "Used MongoDB to securely manage user profiles, product information, and order history",
      "Implemented secure user authentication and authorization with JWT.",
    ],
  },
  {
    title: "Ceylon Marketplace",
    company_name: "Flutter, NodeJS, MongoDB, Express JS",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2024 - Nov 2024",
    points: [
      "Developed a cross-platform mobile app with Flutter for a smooth shopping experience.",
      "Focused on an intuitive, user-friendly interface and easy navigation.",
      "Integrated product management, user profiles, and secure payment features.",
    ],
  },
  {
    title: "Predicting Weather Conditions in Sri Lanka",
    company_name: "Python, Pandas, Scikit-learn, Matplotlib",
    icon: weather,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Developed a machine learning model to predict weather conditions (Sunny, Rainy, Cloudy) using historical weather data from 30 Sri Lankan cities (2010–2023).",
      "Conducted data preprocessing and exploratory data analysis to identify key meteorological patterns.",
      "Trained and evaluated Logistic Regression and Random Forest algorithms to classify future weather conditions with high accuracy.",
      "Visualized climate trends and prediction results to enable better planning for weather-dependent activities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Chathura is reliable and skilled in building responsive and efficient systems.",
    name: "Tharanga Anuradha",
    designation: "Member",
    company: "PublicPulse",
    image:tharanga,
  },
  {
    testimonial:
      "Chathura is a talented developer who creates secure and user-friendly applications.",
    name: "Nimsara Piumal",
    designation: "Member",
    company: "PublicPulse",
    image: piumal,
  },
  {
    testimonial:
      "Chathura’s work in machine learning and data analysis is outstanding.",
    name: "Pasindu Jayasena",
    designation: "Member",
    company: "PublicPulse",
    image: pasindu,
  },
];

const projects = [
  {
    name: "Public Pulse",
    description:
    "Public Pulse is an application designed to enable secure and anonymous voting on policy opinions. It features an intuitive user interface built with React and provides a seamless user experience for engaging with public polls.",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: publicpulse,
    source_code_link: "https://github.com/TA-rathnayaka/PublicPulse.git",
  },
  {
    name: "Food Del",
    description:
      "FoodDel is a MERN stack-based food delivery application with a responsive user interface developed using React and CSS. It includes secure user authentication, RESTful APIs, and MongoDB for seamless management of user profiles, product listings, and order histories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: fooddelBanner,
    source_code_link: "https://github.com/chathura26322/food-del.git",
  },
  {
    name: "Predicting Weather ",
    description:
      "This project leverages machine learning to classify weather conditions based on historical data from 30 Sri Lankan cities. Using Python, it delivers accurate predictions, enabling better planning for weather-dependent activities",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
      {
        name: "google colab",
        color: "pink-text-gradient",
      },
    ],
    image: weatherBanner,
    source_code_link: "https://github.com/chathura26322/MachineLearingProject.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
