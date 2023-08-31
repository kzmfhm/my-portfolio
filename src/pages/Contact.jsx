import React from 'react'
import Navbar from '../components/Navbar';
import WomenImg from '../images/woman1.png';

const Contact = () => {
  return (
    <> <Navbar/>
    <div class='hidden font-bold text-yellow-700 md:flex'>
    <img src={WomenImg}/>
   </div>
   </>
  )
}

export default Contact