import './style.css';
import Navbar from '../../components/Navbar';
import scraperGif from '../../images/scraper.gif';
import webpGif from '../../images/first-project.gif';
import gameGif from '../../images/tic-act-game.gif';
import githubImage from '../../images/github.svg';
import loginImage from '../../images/3D-form.gif';

const Projects = () => {

  return (
    <>
    <Navbar/>
    <div className='h-auto w-full md:h-[700px] md:flex justify-center mt-[50px]'>
      <div className="text-zone">
       <p className='md:mx-[220px] align-middle text-white text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>
          Shining a light on some of my hard work and accomplishments
        </p>
        <div className='cards'>
          <div className='card'>
          <img src={webpGif} alt="webp gif" className="webp-gif" />
            <h2 class= 'md:mx-[80px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...'>
          A Desktop Application</h2>
            <p class='md:mx-[13px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  ...'>WebP Converter converts any png,jpeg and svg images to webp formate.</p>
          <div className='project-card-technologies'>
          <span className='tech-1'>
          PyQt6
          </span>
          <span className='tech-2'>
          Python
          </span>
          <span className='tech-3'>
            Image Conversion
            </span>
         <br/>
          <div className='zone'>
          <span className='tech-4'>
          Pytest
          </span>
            <div className="github">
            <a href="https://github.com/kzmfhm/pyqt6-webp-file-converter" target="_blank" rel="noopener noreferrer">
              <img src={githubImage} alt="GitHub Icon" className="github-icon" />
            </a>
            </div> 
            </div>
          </div>
          </div>
          
          <div className='card'>
          <img src={gameGif} alt="tikytoky gif" className="tic-tac-toe-gif" />
            <h2 class='md:mx-[80px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...'>Tic-Tac-Toe Game</h2>
            <p class='md:mx-[13px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600   ...'>Tic-Tac-Toe game is built in javaScript with css styling and animations.
            </p>
          <div className='project-card-technologies'>
          <span className='tech-1'>
          JavaScript
          </span>
          <span className='tech-2'>
          CSS
          </span>
          <span className='tech-3'>
          HTML
          </span>
         <span className='tech-3'>
          CSS-grid
          </span>
          <br/>
          <div className='zone'>
            <span className='tech-4'>
            Game Development
            </span>
           <div className="github">
            <a href="https://github.com/kzmfhm/tic-tac-toe-game.git" target="_blank" rel="noopener noreferrer">
              <img src={githubImage} alt="GitHub Icon" className="github-icon" />
            </a>
            </div> 
            </div>
          </div>
          </div>
         
          <div className='card'>
          <img src={scraperGif} alt="scraper gif" className="scraper-gif" style={{ width: '350px', height: '210px' }} />
          <h2 class='md:mx-[80px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...'>An Email Scraper</h2>
            <p class='md:mx-[13px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  ...'> This scraper is built in python3 using PyQt6,beautifulsoup4 and requests libraries.</p>
          <div className='project-card-technologies'>
            <span className='tech-1'>
            Python3
            </span>
            <span className='tech-2'>
            PyQt6
            </span>
            <span className='tech-3'>
            Pytest
            </span>
            <span className='tech-5'>
            Requests
            </span>
            <br/>
            <div className='zone'>
            <span className='tech-4'>
            beautifulsoup4
            </span>
            <div className="github">
            <a href="https://github.com/kzmfhm/pyqt6-gui-email-scraper" target="_blank" rel="noopener noreferrer">
              <img src={githubImage} alt="GitHub Icon" className="github-icon" />
            </a>
            </div> 
            </div>
          </div>
          </div>
          <div className='card'>
          <img src={loginImage} alt="sign-up" className="login" style={{ height: '210px' }} />
           <h2 class= 'md:mx-[120px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...'>
          3D Form</h2>
            <p class='md:mx-[13px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  ...'>This is a 3D SignUp or SignIn page made using HTML, CSS and JavaScript.</p>
          <div className='project-card-technologies'>
          <span className='tech-1'>
          Javascript
          </span>
          <span className='tech-2'>
          HTML
          </span>
          <span className='tech-3'>
            CSS
            </span>
         <br/>
          <div className='zone'>
          <span className='tech-4'>
          Responsive
          </span>
            <div className="github">
            <a href="https://github.com/kzmfhm/3D-login-page" target="_blank" rel="noopener noreferrer">
              <img src={githubImage} alt="GitHub Icon" className="github-icon" />
            </a>
            </div> 
            </div>
          </div>
          </div>
        </div>
      
     </div>
     
    </div>

    </>
  );
};

export default Projects;
