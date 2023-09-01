import React,{useState} from 'react';
import Navbar from '../../components/Navbar';
import WomenImg from '../../images/woman1.png';
import TextField from '@mui/material/TextField';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Step 1
  const baseUrl = 'http://localhost:8000';



  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid;
  };

  const sendEmail = async () => {
    if (!name || !email || !message) {
      setResponseMessage('Please complete the form.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailValidationMessage('Invalid email address');
      return;
    }

    setIsLoading(true); 

    const dataSend = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const res = await fetch(`${baseUrl}/send-email`, {
        method: 'POST',
        body: JSON.stringify(dataSend),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (res.status > 199 && res.status < 300) {
        setResponseMessage('Message Send Successfully!');
      } else {
        setResponseMessage('Error sending email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Error sending email. Please try again.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen w-full text-white h-auto md:pt-[-10px] md:flex'>
        <div className='hidden font-bold text-yellow-700 md:flex'>
          <img src={WomenImg} alt='Woman' />
        </div>
        <div class='md:h-[700px] h-[700px] md:mt-[10px] mt-[20px] md:ml-10 md:w-[950px] w-[350px] ml-[20px] bg-[#111]'>
        <p class='md:ml-[220px] h-[30px] md:mt-[40px] align-middle text-white text-2xl cursor-pointer transition ease-in-out delay-90 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-100 ...'>
            ________________________{' '}
            <span className='mt-[-20px]'>
              <QuestionAnswerIcon style={{color: '#daa520' }} />
            </span>{' '} ________________________
          </p>
          <p class='md:ml-[220px] mt-[30px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600'>
         
          ⚡If you have any suggestion, project or even you want to say Hello..<br/> please fill out the form below and I will reply you shortly.
          ⚡</p>
        
          <form class='bg-[#000000] mt-[30px] md:ml-[220px] ml-[20px] w-[310px] h-[500px] md:h-[500px] md:w-[510px]'>
            <ul>
              <li className=' mt-[50px]'>
                {/* Replaced the input with Material-UI TextField */}
                <TextField
                  id="name"
                  label="Enter your name.."
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </li>
              <li className='contact'>
                {/* Replaced the input with Material-UI TextField */}
                <TextField
                  id="email"
                  label="Enter your email.."
                  variant="standard"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailValidationMessage('');
                  }}
                  required
                />
                {emailValidationMessage && (
                  <p className='error-message'>{emailValidationMessage}</p>
                )}
              </li>
              <li>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  name='message'
                  placeholder='Message'
                />
              </li>
              <li>
                {/* Conditional rendering based on isLoading */}
                {isLoading ? (
                  <button className='flat-button3' disabled>
                    <div className='loader'></div>
                  </button>
                ) : (
                  <input
                    type='button'
                    className='flat-button3'
                    value='Send'
                    onClick={sendEmail}
                    disabled={isLoading}
                  />
                )}
                {responseMessage && !isLoading && (
                  <p className='response-message'>{responseMessage}</p>
                )}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

