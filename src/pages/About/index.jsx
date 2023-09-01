import React from 'react'
import Navbar from '../../components/Navbar';
import WomenImg from '../../images/woman1.png';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import './style.css';


const About = () => {
    return (
        <> 
        <Navbar/>
        <div class='hidden font-bold text-yellow-700 md:flex'>
        <img src={WomenImg}/>
       </div>
       </>
      )
}

export default About