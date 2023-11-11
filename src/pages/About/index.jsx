import React from 'react';
import Navbar from '../../components/Navbar';
import InfoIcon from '@mui/icons-material/Info';
import './style.css';
import gImage from '../../images/github.svg';
import Footer from '../../components/Footer';

const About = () => {
  const gLink = 'https://github.com/kzmfhm/my-portfolio';

  const skills = [
    { name: 'JavaScript', image: require('../../images/js.svg').default },
    { name: 'TypeScript', image: require('../../images/ts.svg').default },
    { name: 'Material UI', image: require('../../images/MUI.svg').default },
    { name: 'Bootstrap', image: require('../../images/bootstrap.svg').default },
    { name: 'Tailwind CSS', image: require('../../images/tailwindcss.svg').default },
    { name: 'MongoDB', image: require('../../images/mongodb.svg').default },
    { name: 'MySQL', image: require('../../images/mysql.svg').default },
    { name: 'React', image: require('../../images/react.svg').default },
    { name: 'Python', image: require('../../images/python.svg').default },
    { name: 'Next.js', image: require('../../images/nextjs.svg').default },
    { name: 'HTML', image: require('../../images/html.svg').default },
    { name: 'Figma', image: require('../../images/figma.svg').default },
    { name: 'Canva', image: require('../../images/canva.svg').default },
    { name: 'CSS', image: require('../../images/css.svg').default },
  ];

  const renderSkills = () => (
    <ul className="mt-[10px] md:mt-[40px] cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600">
      {skills.map((skill, index) => (
        <li key={index} className={`flex ${index % 2 === 0 ? 'mx-10' : 'md:mx-10'}`}>
          <img className="mx-2" src={skill.image} alt={skill.name} />
          {skill.name}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full text-white md:h-auto md:pt-[-10px] md:flex">
        <div className="centered-div mt-[15px]  md:mt-[10px]">
          <div className="md:h-[700px] h-[700px] md:mt-[10px] mt-[40px] md:ml-10 md:w-[950px] w-[350px] ml-[-3px] bg-[#111]">
            <p className="md:ml-[220px] h-[30px] md:mt-[40px] align-middle text-white text-2xl cursor-pointer transition ease-in-out delay-90 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-100 hide-in-mobile">
              ________________________{' '}
              <span className="mt-[-20px]">
                <InfoIcon style={{ marginBottom: '-10px', color: '#daa520' }} />
              </span>{' '}
              ________________________
            </p>
            <p className="md:ml-[220px] mt-[30px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600">
              ⚡ I'm a Frontend Web Developer based in Pakistan, I have a serious passion <br />for UI effects, animations, and creating intuitive UI Interfaces. .⚡
            </p>
            <div className="flex-container">
              <div className="left-container">
                <h1 className="align-middle md:mx-[105px] mt-[20px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600">⭐PERSONAL INFO</h1>
                <p className="md:ml-[90px] h-[10px] md:mt-[-15px] align-middle text-white text-2xl cursor-pointer transition ease-in-out delay-90 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-100 hide-in-mobile">
                  ___________________
                </p>
                <h2 className="mt-5 about pt-5 pl-[50px] pr-[40px] cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600">
                  🎓Hi there, Khuzaima is a frontend web developer and UI/UX designer with more than two years of work experience in this field. As a programmer, She is a skilled and knowledgeable individual with a passion for creating and improving software and solving problems.<br/>
                  She is highly analytical, able to break down complex problems into manageable pieces and devise efficient solutions.
                  She is also a strong problem-solver, able to troubleshoot and debug code to ensure that it is functioning as intended.<br/>
                </h2>
              </div>
              <div className="right-container">
                <h1 className="align-middle md:mx-[150px] mt-[20px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600">⭐SKILLS</h1>
                <p className="md:ml-[90px] h-[10px] md:mt-[-15px] align-middle text-white text-2xl cursor-pointer transition ease-in-out delay-90 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-100 hide-in-mobile">
                  ___________________
                </p>
                {renderSkills()}
              </div>
            </div>
            <a href={gLink} target="_blank" rel="noopener noreferrer">
              <img src={gImage} alt="my github" className="gt-Icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[10px]">
        <Footer />
      </div>
    </>
  );
};

export default About;

