import React from 'react';
import Navbar from '../../components/Navbar';
import WomenImg from '../../images/woman1.png';
import InfoIcon from '@mui/icons-material/Info';
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
import figmaImage from '../../images/figma.svg';
import canvaImage from '../../images/canva.svg';
import './style.css'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen w-full text-white h-auto md:pt-[-10px] md:flex'>
        <div className='hidden font-bold text-yellow-700 md:flex'>
          <img src={WomenImg} alt='Woman' />
        </div>
        <div className='md:h-[700px] h-[700px] md:mt-[10px] mt-[20px] md:ml-10 md:w-[950px] w-[350px] ml-[20px] bg-[#111]'>
          <p className='md:ml-[220px] h-[30px] md:mt-[40px] align-middle text-white text-2xl cursor-pointer transition ease-in-out delay-90 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-100 hide-in-mobile'>
            ________________________{' '}
            <span className='mt-[-20px]'>
              <InfoIcon style={{ marginBottom:'-10px',color: '#daa520' }} />
            </span>{' '}
            ________________________
          </p>
          <p className='md:ml-[220px] mt-[30px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>
            ⚡
            I'm a Frontend Web Developer based in Pakistan, I have a serious passion <br />for UI effects, animations, and creating intuitive UI Interfaces.
            .⚡
          </p>
            <div className="flex-container">
            <div className="left-container">
            <h1 class='align-middle md:mx-[105px] mt-[20px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>⭐PERSONAL INFO
                </h1>  
                <p className='md:ml-[90px] h-[10px] md:mt-[-15px] align-middle text-white text-2xl cursor-pointer transition ease-in-out delay-90 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-100 hide-in-mobile'>
                        ___________________</p>
            <h2 class='mt-5 about pt-5 pl-[50px] pr-[40px] cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>
            🎓Hi there, Khuzaima is a frontend web developer with more than two years of work experience in this field. As a programmer, She is a skilled and knowledgeable individual with a passion for creating and improving softwares and solving problems.<br/>
             She is highly analytical, able to break down complex problems into manageable pieces and devise efficient solutions.
            She is also a strong problem-solver, able to troubleshoot and debug code to ensure that it is functioning as intended.<br/>
            </h2>
            </div>
            <div className="right-container">
            <h1 class='align-middle md:mx-[150px] mt-[20px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>⭐SKILLS
                </h1>
                <p className='md:ml-[90px] h-[10px] md:mt-[-15px] align-middle text-white text-2xl cursor-pointer transition ease-in-out delay-90 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-100 hide-in-mobile'>
                        ___________________</p>
                    <ul class='mt-[10px] md:mt-[40px] cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>
                    <li class='flex mx-10'>
                    <img class='mx-2' src={jsImage} alt="js" />JAVASCRIPT
                    </li>
                    <li class='flex md:mx-10'>
                    <img class='mx-2' src={tsImage} alt="ts" />TYPESCRIPT
                    </li>
                    <li class='flex md:mx-10'>
                    <img class='mx-2' src={muImage} alt="material-ui" />MATERIAL UI
                    </li>
                    <li class='flex md:mx-10'>
                    <img class='mx-2' src={BImage} alt="bootstrap" />BOOTSTRAP
                    </li>
                    <li class='flex mx-10'>
                    <img class='mx-2' src={tailwindImage} alt="tailwind" />TAILWINDCSS
                    </li>
                    <li class='flex md:mx-10'>
                    <img class='mx-2' src={mongoImage} alt="mongo db" />MONGO.db
                    </li>
                    <li class='flex md:mx-10'>
                    <img class='mx-2' src={sqlImage} alt="my sql" />MYSQL
                    </li>
                    <li class='flex md:mx-10'>
                    <img class='mx-2' src={RImage} alt="react" />React
                    </li>
                    <li class='flex md:ml-[255px]  mt-[-193px]'>
                    <img class='mx-2' src={PyImage} alt="python" />PYTHON
                    </li>
                    <li class='flex md:ml-[255px]'>
                    <img class='mx-2' src={NImage} alt="next-js" />NEXT.js
                    </li>
                    <li class='flex md:ml-[255px] '>
                    <img class='mx-2' src={htmlImage} alt="html" />HTML
                    </li>
                    <li class='flex md:ml-[255px]'>
                    <img class='mx-2' src={figmaImage} alt="figma" />FIGMA
                    </li>
                    <li class='flex md:ml-[255px]'>
                    <img class='mx-2' src={canvaImage} alt="canva" />CANVA
                    </li>
                    <li class='flex md:ml-[255px]'>
                    <img class='mx-2 ' src={cssImage} alt="css" />CSS
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
