import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import './style.css';
import gImage from '../../images/github.svg';
import Footer from '../../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = 'http://localhost:8000';
  const gLink = 'https://github.com/kzmfhm/my-portfolio';

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === 'email') setEmailValidationMessage('');
  };

  const sendEmail = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage('Please complete the form.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailValidationMessage('Invalid email address');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${baseUrl}/send-email`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (res.status > 199 && res.status < 300) {
        setResponseMessage('Message Sent Successfully!');
      } else {
        setResponseMessage('Error sending email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Error sending email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen w-full text-white h-auto md:pt-[-10px] md:flex'>
        <div className='centered-div2 mt-[15px]  md:mt-[10px]'>
          <div className='md:h-[700px] h-[700px] md:mt-[10px] mt-[40px] md:ml-10 md:w-[950px] w-[350px] ml-[-3px] bg-[#111]'>
            <p className='md:ml-[220px] h-[30px] md:mt-[40px] align-middle text-white text-2xl cursor-pointer transition ease-in-out delay-90 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-100 hide-in-mobile'>
              ________________________{' '}
              <span className='mt-[-20px]'>
                <QuestionAnswerIcon style={{ marginBottom: '-10px', color: '#daa520' }} />
              </span>{' '}
              ________________________
            </p>
            <p className='md:ml-[220px] mt-[30px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>
              ⚡If you have any suggestions, projects, or even want to say Hello..<br /> please fill out the form below, and I will reply shortly.⚡
            </p>
            <form className='bg-[#000000]  md:ml-[220px] ml-[20px] w-[310px] h-[500px] md:h-[500px]  rounded-r-[8px]-[8px] md:w-[510px]'>
              <ul className='mt-[10px]'>
                <li>
                  <label className='mx-4'>
                    {' '}
                    <AccountBoxIcon style={{ color: '#daa520' }} />
                  </label>
                  <input
                    className='mt-[50px] mx-2 text-yellow-700 p-2 bg-[#111] h-[40px] md:w-[400px]'
                    id='name'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </li>
                <li>
                  <label className='mx-4'>
                    {' '}
                    <EmailIcon style={{ color: '#daa520' }} />
                  </label>
                  <input
                    className='mt-[50px] mx-2 text-yellow-700 p-2 bg-[#111] h-[40px] md:w-[400px]'
                    id='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {emailValidationMessage && (
                    <p className='error-message'>{emailValidationMessage}</p>
                  )}
                </li>
                <li>
                  <label className='mx-4'>
                    {' '}
                    <ChatIcon style={{ marginBottom: '70px', color: '#daa520' }} />
                  </label>
                  <textarea
                    className='md:mt-[50px] mt-[50px] mx-2 text-yellow-700 p-2 bg-[#111] md:h-[80px] w-[200px] md:w-[400px]'
                    onChange={(e) => setFormData((prevData) => ({ ...prevData, message: e.target.value }))}
                    name='message'
                    placeholder='Message'
                  />
                </li>
                <li>
                  {isLoading ? (
                    <div className='loader-wrapper'>
                      <div className='loader'></div>
                    </div>
                  ) : (
                    <input
                      className='md:ml-[60px] ml-[60px] font-bold text-[#000000] p-2 w-[200px] bg-[#111] h-[40px] md:w-[400px]'
                      type='button'
                      value='Send'
                      onClick={sendEmail}
                      disabled={isLoading}
                      style={{ backgroundColor: '#daa520' }}
                    />
                  )}
                  {responseMessage && !isLoading && (
                    <p className='loading-tag'>{responseMessage}</p>
                  )}
                </li>
              </ul>
            </form>
            <a href={gLink} target="_blank" rel="noopener noreferrer">
              <img src={gImage} alt="my github" className="g-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className=' mt-[-100px] md:mt-[10px] footer'>
        <Footer />
      </div>
    </>
  );
};

export default Contact;

