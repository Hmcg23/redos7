import { useEffect } from 'react';
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import redos7logo from '../images/redos7logo.png'

function HomePage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      }, []);
  return (
      <section className='home-page' data-aos='fade-up' data-aos-duration='1000'>
            <div className='header'>
                <img src={redos7logo} alt='redos7 logo' className='redos-logo' data-aos='flip-left' data-aos-delay='200' data-aos-duration='1000' />
                <h1>a new place for <span className='red-text'>RedOS 7</span></h1> 
            </div>
            <h2>Our new website helps members to apply easier, collaborate & understand each other better.</h2>
            <div className='buttons'>
                <a href='https://discord.com/invite/hCW8V8rJRs' target='_blank' rel="noreferrer"><button>Apply</button></a>
                <Link to='/about'><button>Learn More</button></Link>
            </div>

      </section>
  );
}

export default HomePage;