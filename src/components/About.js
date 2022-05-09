import { useEffect } from 'react';
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import redos_studio from '../images/redos_studio.png';
import oswars_info from '../images/oswars_info.png';
import oswars_reveal from '../images/oswars_reveal.png';
import oswars_round1 from '../images/oswars_round1.png';


function About() {  
    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      }, []);
  return (
      <section data-aos='fade-up' data-aos-duration='1000' className='about'>
        <div className='text-info'>
            <h1>About</h1>
          <h2>What is OS Wars?</h2>
          <p>OS Wars is a scratch competition where different teams compete to create an operating system. There are multiple rounds, and judges to help with the process.</p>
          <h2>Our Team</h2>
          <div className='members'>
            <div className='member-section'>
              <h3>Leaders</h3>
              <ul>
                <li>MyLabs</li>
                <li>scratching_claws</li>
                <li>catkitty12021</li>
                <li>7pace</li>
              </ul>          
            </div>
            <div className='member-section'>
              <h3>Designers</h3>
              <ul>
                <li>Eons</li>
                <li>Phoax-</li>
                <li>-Artemisa</li>
              </ul>          
            </div>
            <div className='member-section'>
              <h3>Coders</h3>
              <ul>
                <li>-fenyx</li>
                <li>_Aaron_</li>
                <li>-Celestite-</li>
              </ul>          
            </div>
          </div>
        </div>
        <div className='about-images'>
          <a href='https://scratch.mit.edu/studios/31229278/' target='_blank' rel='noreferrer' data-aos='zoom-in-up' data-aos-duration='1000'>
            <div className='about-image'>
              <img src={redos_studio} alt='redos studio' />
              <h3>RedOS 7 Studio</h3>
            </div>            
          </a>
          <a href='https://scratch.mit.edu/projects/653970557/' target='_blank' rel='noreferrer' data-aos='zoom-in-up' data-aos-duration='1000' data-aos-delay='200'>
            <div className='about-image'>
              <img src={oswars_info} alt='oswars info' />
              <h3>OS Wars Info</h3>
            </div>
          </a>
          <a href='https://scratch.mit.edu/projects/638012399/' target='_blank' rel='noreferrer' data-aos='zoom-in-up' data-aos-duration='1000' data-aos-delay='400'>
            <div className='about-image'>
              <img src={oswars_reveal} alt='oswars reveal' />
              <h3>OS Wars Reveal</h3>
            </div>
          </a>
          <a href='https://scratch.mit.edu/projects/670615845/' target='_blank' rel='noreferrer' data-aos='zoom-in-up' data-aos-duration='1000' data-aos-delay='600'>
            <div className='about-image'>
              <img src={oswars_round1} alt='oswars round1' />
              <h3>OS Wards Round 1</h3>
            </div>            
          </a>

        </div>
        
      </section>
  );
}

export default About;