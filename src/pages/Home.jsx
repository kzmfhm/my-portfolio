import React from 'react'
import WomenImg from '../images/woman1.png';
import Navbar from '../components/Navbar';
const Home = () => {
 
  const githubLink = 'https://github.com/kzmfhm/kzm-portfolio';
  return (
    <>
    <Navbar/>
    <header class='h-auto md:pt-[-10px] md:flex'>
    <div class='hidden font-bold text-yellow-700 md:flex'>
      <img src={WomenImg}/>
     </div>
 
     <div class='row'>
      <div class="md:mt-[50px] font-sans hover:font-serif p-10 rounded-xl md:pt-[100px] items-center space-x-4 h-[330px] w-[200px] font-bold md:h-[330px] md:w-[480px] text-white">
      <p class='md:mx-[55px] font-sans hover:font-serif text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>💫HI THERE! I'M</p>
      <p class='md:mx-[20px] font-sans hover:font-serif pt-[10px] text-5xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>KHUZAIMA</p>
      <p class='md:mx-[100px] font-sans hover:font-serif pt-[10px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>FRONTEND DEVELOPER.</p>
    </div>
    <div class="md:mt-[20px] p-10 rounded-xl pt-[100px] items-center md:mx-[20px] space-x-4 font-bold h-[100px] md:h-[330px] w-[290px] md:w-[480px] text-white bg-[#111]">
    
    <h2>Frontend Developer/JavaScript & TypeScript Expert/
        <br/>Mostly, I work on creating user interfaces.</h2>
        <h3>
         This project is built using React,JavaScript TypeScript,SCSS, HTML and CSS.
          <br /> 
          you can also see this project on my Github profile<br/>
          const githubLink:  <br /> 
         <a href={githubLink}> https://github.com/kzmfhm/kzm-portfolio</a>.
          <br /> 
        </h3>
    </div>
    </div>
    <div class='row'>
    
    <div class="mt-[50px] p-20 rounded-xl pt-[100px] items-center space-x-4 font-bold h-[100px] md:h-[330px] w-[290px] md:w-[480px] text-white bg-[#111]">
    <p class="md:mx-[100px] font-sans hover:font-serif text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
    ⭐SKILLS
        </p>
      <p class='md:mx-[20px] font-sans hover:font-serif pt-[10px] text-5xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>KHUZAIMA</p>
      <p class='md:mx-[100px] font-sans hover:font-serif pt-[10px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>FRONTEND DEVELOPER.</p>
    </div> 
    <div class="mt-[20px] p-10 rounded-xl pt-[100px] items-center md:mx-[5px] space-x-4 font-bold h-[100px] md:h-[330px] w-[290px] md:w-[480px] text-white bg-[#111]">
   
    </div>
    </div>
    </header>
    </>
  )
}

export default Home;