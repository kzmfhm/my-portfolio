import React from 'react'
import WomenImg from '../../images/woman1.png';
import Navbar from '../../components/Navbar';
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
     <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={gitImage} alt="github-code" className="gitIcon" />
            </a>
    <div class='section1'>

    <div class="md:mt-[20px] font-sans hover:font-sans p-10 rounded-xl md:pt-[100px] items-center space-x-4 h-[100px] w-[290px] font-bold md:h-[330px] md:w-[480px] text-white section1">
  
    <p class='md:mx-[40px] font-sans hover:font-sans text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 duration-300 ...'>💫HI THERE! I'M
      </p>
      <p class='md:mx-[20px] font-sans hover:font-sans pt-[10px] text-5xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 duration-300 ...'>KHUZAIMA</p>
      <p class='md:mx-[100px] font-sans hover:font-sans pt-[10px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110  duration-300 ...'>FRONTEND DEVELOPER.</p>
     
    </div>
    <div class='mt-[20px] pt-[110px] align-middle justify-center rounded-xl items-center space-x-4 md:mx-[20px]  font-bold h-[100px] md:h-[330px] w-[290px] md:w-[480px] text-white bg-[#111] section2'>
    <h2 class='align-middle w-[350px] md:mx-[60px] mt-[10px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600 hover:-translate-y-1 hover:scale-110 duration-300 ..'>
        💫Frontend Developer / JavaScript & TypeScript Expert/. Mostly, I work on creating user interfaces.
    </h2>
</div>

    </div>
    <div class='section3'>
    <div class="mt-[20px] pt-[10px] rounded-xl items-center space-x-4 font-bold md:mx-[5px] md:h-[330px] h-[100px] w-[290px] md:w-[480px] bg-[#111] ">
   <div class='solar-system'>
   <div class='sun justify-center align-middle text-center'>
    <div class='earth'>
    <div class='moon'>
    </div>
    </div>
    </div>
   </div>
    </div> 
    <div class="mt-[20px] pt-[110px] align-middle justify-center rounded-xl items-center md:mx-[5px] space-x-4 font-bold h-[100px] md:h-[330px] w-[290px] md:w-[480px] text-white bg-[#111] section4">
    <h2 class='align-middle w-[350px] md:mx-[60px] mt-[10px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...'>
    💫This project is built using React, JavaScript, Material UI,HTML, TailwindCSS and CSS.
      you can also see this project on my Github profile:</h2><br/>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={gitImage} alt="my github" className="icon" />
            </a>   
       </div>
    </div>
 
    </header>
    </>
  )
}

export default Home;