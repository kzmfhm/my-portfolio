import GithubIcon from '../images/svg/github.svg';
import LinkedinIcon from '../images/svg/linkedin.svg';
import FigmaIcon from '../images/svg/figma.svg'
import { Link } from 'react-router-dom'; 
import "./style.scss";
import Section from "../sections";


const Footer = () => {
    return (
        <Section background="dark" className="footer">
            <div className="footer-content-wrapper">
                <ul className="footer-menu-items">
                    <li className="footer-menu-item">
                        <Link to="/about">Skills</Link>
                    </li>
                    <li className="footer-menu-item">
                        <Link to="/projects">Projects</Link> 
                    </li>
                    <li className="footer-menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="footer-menu-item">
                        <Link to="/contact">Contact me</Link>
                    </li>
                </ul>
                <div className="social-icons">                   
                    <a href="https://github.com/kzmfhm/my-portfolio" target="_blank" rel="noopener noreferrer">
                    <img className="social-icon" src={GithubIcon} alt="GitHub" />
                     </a>
                    <img className="social-icon" src={LinkedinIcon} alt="LinkedIn" />
                    <img className="social-icon" src={FigmaIcon} alt="Figma" />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2024 kzm Frontend developer | All Rights Reserved
                   
                    </div>
                </div>
            </div>
         
        </Section>
    );
};

export default Footer;

