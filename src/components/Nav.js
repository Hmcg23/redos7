import { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

function Nav() {
    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      }, []);
  return (
    <nav data-aos='fade-down' data-aos-duration='1000'>
        <Link to='/'><h1>RedOS 7</h1></Link>
        <ul className='nav-links'>
            <Link to='/design'><li>Design</li></Link>
            <Link to='/code'><li>Code</li></Link>
            <Link to='/about'><li>About</li></Link>
            <li className='apply'><a href='https://discord.com/invite/hCW8V8rJRs' target='_blank' rel="noreferrer">Apply</a></li>
        </ul>
    </nav>
  );
}

export default Nav;