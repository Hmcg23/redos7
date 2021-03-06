import { useEffect } from 'react';
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import redos_studio from '../images/redos_studio.png';
import oswars_info from '../images/oswars_info.png';
import oswars_reveal from '../images/oswars_reveal.png';
import oswars_round1 from '../images/oswars_round1.png';
import oswars_round2 from '../images/oswars_round2.png';


function About() {  
    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      }, []);
  return (
      <section data-aos='fade-up' data-aos-duration='1000' className='about'>
        <div className='text-info'>
            <h1 className='page-h1'>About</h1>
          <h2>What is OS Wars?</h2>
          <p>OS Wars is a team competition where the goal is to design and program the best operating. Over the course of several rounds, judges submit scores for each team on different criteria. At the end, the team with the most points wins!</p>
          <h2>How to join?</h2>
          <p>To join, check in our <a className='red-text underline' href='https://discord.com/invite/hCW8V8rJRs'>discord</a> server! More information regarding your application is over there. If you do not have access to discord, check out the <a className='red-text underline' href='https://scratch.mit.edu/discuss/topic/594771/'>forums</a>, or our <a className='red-text underline' href='https://scratch.mit.edu/studios/31229278/'>studio</a>.</p>
          <h2>Our Team</h2>
          <p>We're still looking for members, but here is our current team:</p>
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
          <h2>Studio</h2>
          <p>Join our studio to view our progress and stay up to date!</p>
          <a href='https://scratch.mit.edu/studios/31229278/' target='_blank' rel='noreferrer' className='studio-image'>
            <img src={redos_studio} alt='redos studio' data-aos='zoom-in-up' data-aos-duration='500' />        
          </a>
        </div>
        <h2>More - Quick Links</h2>
        <div className='about-images'>
          <a href='https://scratch.mit.edu/projects/653970557/' target='_blank' rel='noreferrer' data-aos='zoom-in-up' data-aos-duration='500'>
            <div className='about-image'>
              <img src={oswars_info} alt='oswars info' />
              <h3>OS Wars Info</h3>
            </div>
          </a>
          <a href='https://scratch.mit.edu/projects/638012399/' target='_blank' rel='noreferrer' data-aos='zoom-in-up' data-aos-duration='500'>
            <div className='about-image'>
              <img src={oswars_reveal} alt='oswars reveal' />
              <h3>OS Wars Reveal</h3>
            </div>
          </a>
          <a href='https://scratch.mit.edu/projects/670615845/' target='_blank' rel='noreferrer' data-aos='zoom-in-up' data-aos-duration='500'>
            <div className='about-image'>
              <img src={oswars_round1} alt='oswars round1' />
              <h3>OS Wars Round 1</h3>
            </div>            
          </a>
          <a href='https://scratch.mit.edu/projects/687759661/' target='_blank' rel='noreferrer' data-aos='zoom-in-up' data-aos-duration='500'>
            <div className='about-image'>
              <img src={oswars_round2} alt='oswars round1' />
              <h3>OS Wars Round 2</h3>
            </div>            
          </a>
        </div>
        
      </section>
  );
}

export default About;