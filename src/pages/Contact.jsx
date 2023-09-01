import React from 'react';
import Navbar from '../components/Navbar';
import WomenImg from '../images/woman1.png';
import '../App.css'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='hidden font-bold text-yellow-700 md:flex'>
        <img src={WomenImg} alt='Woman' />
      </div>
      <div className='bl-content'>
        <div className='container page-title center-align'>
          <h2 className='center-align'>
            <span data-hover='get'>get </span>
            <span data-hover='in touch'>in touch</span>
          </h2>
        </div>
        <div className='container'>
          <div className='divider center-align'>
            <span className='outer-line'></span>
            <span className='fa fa-envelope-open' aria-hidden='true'></span>
            <span className='outer-line'></span>
          </div>
          <div className='row contact section-padding'>
            <div className='col s12 m5 l5 xl4 leftside'>
              <h6 className='font-weight-700 uppercase'>Phone</h6>
              <span className='font-weight-400 second-font'>
                <i className='fa fa-phone'></i> +34 62 11 84 01
              </span>
              <h6 className='font-weight-700 uppercase'>Email</h6>
              <span className='font-weight-400 second-font'>
                <i className='fa fa-envelope'></i> you@yourwebsite.com
              </span>
              <h6 className='font-weight-700 uppercase'>Skype</h6>
              <span className='font-weight-400 second-font'>
                <i className='fa fa-skype'></i> mark.smith
              </span>
              <h6 className='font-weight-700 uppercase'>Address</h6>
              <span className='font-weight-400 second-font'>
                <i className='fa fa-home'></i> Moscow, Russia
              </span>
              <br />
              <h6 className='font-weight-700 uppercase'>Social Profiles</h6>
              <div className='social'>
                <ul className='list-inline social social-intro center-align p-none'>
                  <li className='facebook'>
                    <a href='#'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li className='twitter'>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li className='google-plus'>
                    <a href='#'>
                      <i className='fa fa-google-plus'></i>
                    </a>
                  </li>
                  <li className='linkedin'>
                    <a href='#'>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col s12 m7 l7 xl8 rightside'>
              <h6 className='uppercase m-none font-weight-700'>
                Feel free to drop me a line
              </h6>
              <div className='row'>
                <p className='col s12 m12 l12 xl10 second-font'>
                  If you have any suggestion, project, or even if you just want to say Hello, please fill out the form below, and I will reply shortly.
                </p>
              </div>
              <form className='contactform'>
                <div className='input-field second-font'>
                  <i className='fa fa-user prefix'></i>
                  <input id='name' name='name' type='text' className='validate' value='' />
                  <label className='font-weight-400' htmlFor='name'>
                    Your Name
                  </label>
                </div>
                <div className='input-field second-font'>
                  <i className='fa fa-envelope prefix'></i>
                  <input id='email' type='email' name='email' className='validate' value='' />
                  <label htmlFor='email' className=''>
                    Your Email
                  </label>
                </div>
                <div className='input-field second-font'>
                  <i className='fa fa-comments prefix'></i>
                  <textarea
                    id='comment'
                    name='message'
                    className='materialize-textarea'
                    style={{ height: '57px' }}
                  ></textarea>
                  <label htmlFor='comment' className=''>
                    Your Comment
                  </label>
                </div>
                <div className='col s12 m12 l9 xl8 submit-form'>
                  <button className='btn font-weight-700' type='submit' name='send'>
                    Send Message <i className='fa fa-send'></i>
                  </button>
                </div>
                <div className='col s12 m12 l8 xl8 form-message'>
                  <div className='green-text' style={{ opacity: 0 }}>
                    <span>Your message has been received. We will contact you soon.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
