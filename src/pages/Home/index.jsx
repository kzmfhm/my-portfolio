import React from 'react'
import WomenImg from '../../images/woman1.png';
import Navbar from '../../components/Navbar';
import jsImage from '../../images/js.svg';
import tsImage from '../../images/ts.svg';
import muImage from '../../images/MUI.svg'
import BImage from '../../images/bootstrap.svg';
import sqlImage from '../../images/mysql.svg';
import mongoImage from '../../images/mongodb.svg';
import RImage from '../../images/react.svg';
import tailwindImage from '../../images/tailwindcss.svg'
import PyImage from '../../images/python.svg';
import htmlImage from '../../images/html.svg';
import cssImage from '../../images/css.svg';
import NImage from '../../images/nextjs.svg';
import './style.css';
import gitImage from '../../images/github.svg';

const Home = () => {
 const githubLink = 'https://github.com/kzmfhm/my-portfolio';
  return (
    <>
    <Navbar/>
    <header class='h-auto md:pt-[-10px] md:flex flex-wrap overflow-hidden'>
    <div class='font-bold text-yellow-700 md:flex'>
      <img src={WomenImg}/>
     </div>
    <div class='section1'>
    <div class="md:mt-[20px] font-sans hover:font-sans p-10 rounded-xl md:pt-[100px] items-center space-x-4 h-[100px] w-[290px] font-bold md:h-[330px] md:w-[480px] text-white section1">
    <p class='md:mx-[40px] font-sans hover:font-sans text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 duration-300 ...'>💫HI THERE! I'M
      </p>
      <p class='md:mx-[20px] font-sans hover:font-sans pt-[10px] text-5xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 duration-300 ...'>KHUZAIMA</p>
      <p class='md:mx-[100px] font-sans hover:font-sans pt-[10px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110  duration-300 ...'>FRONTEND DEVELOPER.</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={gitImage} alt="github-code" className="gitIcon" />
            </a>
    </div>
    <div class="md:mt-[20px] p-10 rounded-xl pt-[100px] items-center md:mx-[20px] space-x-4 font-bold  md:h-[330px]  h-[100px] w-[290px] md:w-[480px] text-white bg-[#111] section2">
    <h2 class='align-middle md:mx-[20px] mt-[10px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>⚫Frontend Developer /JavaScript & TypeScriptExpert/.
     <br/> Mostly, I work on creating user interfaces.</h2>
    
    </div>
    </div>
    <div class='section3'>
    <div class="mt-[20px] pt-[10px] rounded-xl items-center space-x-4 font-bold  md:h-[330px] h-[100px] w-[290px] md:w-[480px] text-white bg-[#111]">
    <h1 class='align-middle  md:mx-[170px] mt-[20px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>⭐SKILLS
      </h1>
      <ul class='mt-[10px] md:mt-[20px] cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>
        <li class='flex mx-10'>
        <img class='mx-2' src={jsImage} alt="js" />JAVASCRIPT
        </li>
        <li class='flex mx-10'>
        <img class='mx-2' src={tsImage} alt="ts" />TYPESCRIPT
        </li>
        <li class='flex mx-10'>
        <img class='mx-2' src={muImage} alt="material-ui" />MATERIAL UI
        </li>
        <li class='flex mx-10'>
        <img class='mx-2' src={BImage} alt="bootstrap" />BOOTSTRAP
        </li>
        <li class='flex mx-10'>
        <img class='mx-2' src={tailwindImage} alt="tailwind" />TAILWINDCSS
        </li>
        <li class='flex mx-10'>
        <img class='mx-2' src={mongoImage} alt="mongo db" />MONGO.db
        </li>
        <li class='flex mx-10'>
        <img class='mx-2' src={sqlImage} alt="my sql" />MYSQL
        </li>
        <li class='flex mx-10'>
        <img class='mx-2' src={RImage} alt="react" />React
        </li>
       <li class='flex ml-[255px] mt-[-193px]'>
        <img class='mx-2' src={PyImage} alt="python" />PYTHON
        </li>
        <li class='flex ml-[255px]'>
        <img class='mx-2' src={NImage} alt="next-js" />NEXT.js
        </li>
        <li class='flex ml-[255px] '>
        <img class='mx-2' src={htmlImage} alt="html" />HTML
        </li>
        <li class='flex ml-[255px]'>
        <img class='mx-2' src={cssImage} alt="css" />CSS
        </li>
       </ul>
     
    </div> 
    <div class="mt-[20px] pt-[80px] rounded-xl items-center md:mx-[5px] space-x-4 font-bold h-[100px] md:h-[330px] w-[290px] md:w-[480px] text-white bg-[#111] section4">
    
    <h2 class='align-middle md:mx-[20px] mt-[10px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...'>
    ⚡This project is built using React, JavaScript, Material UI,HTML, TailwindCSS and CSS.⚡</h2>
      <h2 class='align-middle  mt-[5px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  '>
      you can also see this project on my Github profile:<br/>
          <span class='align-middle text-yellow-700 text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-white '>👉const githubLink: </span>
         <a class='text-green-400' href={githubLink}> https://github.com/kzmfhm/my-portfolio</a>.
          <br /> 
        </h2>
        </div>
    </div>
 
    </header>
    </>
  )
}

export default Home;