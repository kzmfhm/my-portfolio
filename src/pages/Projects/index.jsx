import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from './ProjectCard';
import './style.css';
import scraperGif from '../../images/gif/scraper.gif';
import webpGif from '../../images/gif/first-project.gif';
import gameGif from '../../images/gif/tic-act-game.gif';
import loginImage from '../../images/gif/signup.gif';
import InstaGif from '../../images/gif/instagram.gif';
import foodGif from '../../images/gif/food-website.gif';
import showroomGif from '../../images/gif/mobile-showroom.gif'
import PortfolioGif from '../../images/gif/portfolio-website.gif';

const projectsData = [
  {
    title: 'Online Mobile Showroom',
    image: showroomGif,
    description: 'A django ecommerce template for mobile showroom.',
    technologies: ['Django', 'Bootstrap', 'Html', 'CSS','Javascript','Python' ],
    githubLink: 'https://github.com/kzmfhm/mobile-showroom',
  },
  {
    title: 'Portfolio Website',
    image: PortfolioGif,
    description: 'A portfolio website for user experience.',
    technologies: [ 'Javascript','NextJs','FramerMotion', 'Html', 'CSS', ],
    githubLink: 'https://github.com/kzmfhm/portfolio-website',
  },
  {
    title: 'FlavorCraft food website',
    image: foodGif,
    description: 'Mixing classy style with easy-to-use buttons to make the website look fancy.',
    technologies: ['Nextjs', 'React', 'Javascript', 'CSS','Typescript','Html' ],
    githubLink: 'https://github.com/kzmfhm/flavor-craft-food-website',
  },
  {
    title: 'An Instagram VideoPlayer',
    image: InstaGif,
    description: 'A project of video player seamless with Instagram stories.',
    technologies: ['Nextjs', 'React', 'Javascript', 'CSS','Animations',],
    githubLink: 'https://github.com/kzmfhm/instagram-stories',
  },
  {
    title: '  A Desktop Application',
    image: webpGif,
    description: 'WebP Converter converts any png,jpeg and svg images to webp formate.',
    technologies: ['Python', 'Pyqt6', 'Pytest', 'Image Conversion',],
    githubLink: "https://github.com/kzmfhm/pyqt6-webp-file-converter",
  },
  {
    title: 'Tic-Tac-Toe Game',
    image: gameGif,
    description: 'Tic-Tac-Toe game is built in javaScript with CSS styling and animations.',
    technologies: [ 'Javascript', 'CSS', 'HTML','JQuery', 'Game Development'],
    githubLink: "https://github.com/kzmfhm/tic-tac-toe-game.git" ,
  },
  {
    title: '3D Login/Signup Form',
    image: loginImage,
    description: 'This is a 3D SignUp or SignIn page made using HTML, CSS and JavaScript.',
    technologies: ['Javascript', 'CSS', 'HTML5','JQuery','Animations'],
    githubLink: "https://github.com/kzmfhm/3D-login-page",
  },
  {
    title: 'An Email Scraper',
    image: scraperGif,
    description: 'This scraper is built in python3 using PyQt6,beautifulsoup4 and requests libraries',
    technologies: ['Python3', 'Pyqt6', 'Pytest','Beautifulsoup4','Requests'],
    githubLink: "https://github.com/kzmfhm/pyqt6-gui-email-scraper",
    height: '240px', 
    width: '350px', 
  },
  
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className='h-auto w-full  md:flex justify-center '>
        <div className='centered-div4 '>
          <div className="text-zone">
            <h4 className='md:mx-[220px] align-middle text-white text-2xl md:mt-[50px] cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>
              Shining a light on some of my hard work and accomplishments
            </h4>
            <div className='cards'>
              {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=' footer'>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
