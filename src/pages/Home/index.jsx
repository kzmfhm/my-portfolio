import React from 'react'
import Navbar from '../../components/Navbar';
import './style.css';
import gitImage from '../../images/github.svg';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const Home = () => {
 const githubLink = 'https://github.com/kzmfhm/my-portfolio';
  return (
    <>
    <Navbar/>
    <header class='h-auto md:pt-[-10px] md:flex flex-wrap overflow-hidden'>
    <div className='centered-div3 mt-[50px]'> 
   
    <div class='section1'>
    <Link to="/about">
    <div class="md:mt-[20px] font-sans hover:font-sans  md:mx-[10px] md:p-12 rounded-xl md:bg-[#111] md:pt-[100px] md:items-center md:space-x-4 h-[80px] w-[290px] font-bold md:h-[330px] md:w-[480px] text-white">
    <h1 class='md:mx-[80px] font-sans hover:font-sans text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 duration-300 ...'>💫HI THERE! I'M
      </h1>
      <h2 class='md:pl-[50px] font-sans hover:font-sans md:pt-[10px] text-5xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 duration-300 ...'>KHUZAIMA</h2>
      <h3 class='md:pl-[49px] font-sans hover:font-sans md:pt-[10px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110  duration-300 ...'>FRONTEND DEVELOPER</h3>
     </div>
     </Link>
     <Link to="/contact">
    <div class='mt-[20px]  pt-[110px] align-middle justify-center rounded-xl items-center space-x-4 md:mx-[10px]  font-bold h-[100px] md:h-[330px] w-[290px] md:w-[480px] text-white bg-[#111] section2'>
    <h2 class='align-middle w-[350px] md:mx-[60px] mt-[10px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600 hover:-translate-y-1 hover:scale-110 duration-300 ..'>
        💫Frontend Developer Next.js, JavaScript & TypeScript Expert. Mostly, I work on creating user interfaces.
    </h2>
  </div>
  </Link>
  </div>
 
    <div class='section3'>
    <div class="mt-[20px] pt-[10px] rounded-xl items-center space-x-4 font-bold md:mx-[10px] md:h-[330px] ml-10 h-[300px] w-[310px] md:w-[480px] bg-[#111] ">
   <div class='solar-system'>
   <div class='sun justify-center align-middle text-center'>
    <div class='earth'>
    <div class='moon'>
    </div>
    </div>
    </div>
   </div>
    </div> 
    <Link to="/projects">
    <div class="mt-[20px] md:pt-[110px] align-middle justify-center rounded-xl items-center md:mx-[10px] space-x-4 font-bold h-[300px] ml-10 md:h-[330px] w-[310px] md:w-[480px] text-white bg-[#111] section4">
    <h2 class='align-middle w-[350px] md:mx-[60px] md:mt-[10px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...'>
    💫This project is built using React, JavaScript, Material UI,HTML, TailwindCSS and CSS.
      you can also see more projects on my Github profile:</h2><br/>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={gitImage} alt="my github" className="icon" />
            </a>   
       </div>
       </Link>
    </div>
    </div>
    </header>
    <div className='mt-[10px]'>
    <Footer/>
    </div>
    </>
  )
}

export default Home;