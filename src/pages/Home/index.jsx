import Navbar from "../../components/Navbar";
import "./style.css";
import gitImage from "../../images/svg/github.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  const githubLink = "https://github.com/kzmfhm/my-portfolio";
  return (
    <>
      <div className="bg-light-background dark:bg-dark-background text-light-foreground dark:text-dark-foreground">
        <Navbar />

        <header class="h-auto md:pt-[-10px] md:flex flex-wrap overflow-hidden">
          <div className="centered-div3  mt-[17px] md:mt-[5px]">
            {/* --------------Section1----------- */}
            <div className="left-block">
              <div class="section1">
                <Link to="/about">
                  <div class="md:mt-[20px] font-sans hover:font-sans  md:mx-[10px] md:p-12 rounded-xl md:bg-[#111] md:pt-[100px] md:items-center md:space-x-4 h-[80px] w-[290px] font-bold md:h-[330px] md:w-[480px] text-white">
                    <h1 class="md:mx-[80px] font-sans hover:font-sans text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110 duration-300 ...">
                      💫HI THERE! I'M
                    </h1>
                    <h2 className="home-heading">
                      <span data-text="KHUZAIMA">KHUZAIMA</span>
                    </h2>
                    <h3 class="md:pl-[49px] pl:[50px] font-sans hover:font-sans md:pt-[10px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-700  hover:-translate-y-1 hover:scale-110  duration-300 ...">
                      FRONTEND DEVELOPER
                    </h3>
                  </div>
                </Link>
              </div>
              {/* --------------Section2----------- */}
              <div className="section2">
                <Link to="/contact">
                  <div class="mt-[20px]  pt-[110px] align-middle justify-center rounded-xl items-center space-x-4 md:mx-[10px]  h-[300px] font-bold md:h-[330px] w-[310px] md:w-[480px] text-white bg-[#111]">
                    <h2 class="align-middle w-[350px] md:mx-[70px] md:mt-[10px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...">
                      Frontend Web Developer & UI/UX Designer. Mostly, I built
                      and develop user interfaces.
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
            {/* --------------Section3----------- */}
            <div class="section3">
              <div class="mt-[20px] pt-[10px] rounded-xl items-center space-x-4 font-bold md:mx-[10px] md:h-[330px] ml-10 h-[300px] w-[310px] md:w-[480px] bg-[#111] ">
                <div class="solar-system">
                  <div class="sun justify-center align-middle text-center">
                    <div class="earth">
                      <div class="moon"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* --------------Section4----------- */}
              <div className="section4">
                <Link to="/projects">
                  <div class="mt-[20px] md:pt-[110px] align-middle justify-center rounded-xl items-center md:mx-[10px] space-x-4 font-bold h-[300px] ml-10 md:h-[330px] w-[310px] md:w-[480px] text-white bg-[#111]">
                    <h2 class="align-middle w-[350px] md:mx-[70px] md:mt-[10px] text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...">
                      This project is built in React using JavaScript,
                      TailwindCSS and CSS. A visually captivating journey awaits
                      on my GitHub profile.
                    </h2>
                    <br />
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={gitImage} alt="my github" className="icon" />
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-[40px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
