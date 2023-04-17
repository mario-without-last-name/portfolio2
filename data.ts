import { IconType } from 'react-icons';
import { RiComputerLine } from 'react-icons/ri'
import { AiOutlineApi, AiOutlineDatabase, AiOutlineFormatPainter } from 'react-icons/ai'
import { RxRulerSquare } from 'react-icons/rx'
import { FaPhotoVideo } from 'react-icons/fa'
import { BsCircleFill } from 'react-icons/bs'

import { IProject, IService, ISkill } from './type';
// Object Oriented. just to make sure the data types are proerply made
// interface IService{
//   title: string;
//   about: string;
//   Icon: IconType; // How to know that the data type is "IconType"? ctrl + click on "RiComputerLine" or other react icons
// }

export const services:IService[]  = [
  {
    title:"Frontend Developer",
    about:"Want a website that looks great and performs even better? I'm your go-to guy! With my expertise in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, I create stunning interfaces that keep your users hooked.",
    Icon: RiComputerLine,
  },
  {
    title:"Backend Developer",
    about:"Building robust and secure web applications is my forte! With my mastery in programming languages like <b>Python</b>, <b>Ruby</b>, and <b>Java</b>, I can craft a reliable backend that can handle millions of users without breaking a sweat.",
    Icon: AiOutlineDatabase,
  },
  {
    title:"UI/UX Designer",
    about:"Need to make memorable visual designs? No sweat! From <b>color schemes</b> to <b>layouts</b>, I apply top-tier make-up to any website content! There'll be no such thing as a random mess of elements on your webpage",
    Icon: AiOutlineFormatPainter,
  },
  {
    title:"API Developer",
    about:"Want to connect different software systems together? That's where I come in! I specialize in developing <b>APIs</b> that allow your applications to communicate seamlessly with each other, making your life easier!",
    Icon: AiOutlineApi,
  },
  {
    title:"Graphic Designer",
    about:"Whether it's logos, banners, or marketing materials, I bring your brand to life with my creative flair! With my keen eye for design and mastery of <b>Adobe Creative Suite</b>, I make sure your visuals stand out from the rest.",
    Icon: RxRulerSquare,
  },
  {
    title:"Graphic Animator",
    about:"From explainer videos to animated ads, I bring your ideas to life through motion graphics! With my expertise in animation software like <b>After Effects</b> and <b>Blender</b>, I create visually stunning animations that capture your audience's attention.",
    Icon: FaPhotoVideo,
  },
]

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80%",
  },
]

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85%",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45%",
  },
]

export const projects: IProject[] = [
  { 
    id:1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id:2,
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id:3,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id:4,
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id:5,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id:6,
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id:7,
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id:8,
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
]