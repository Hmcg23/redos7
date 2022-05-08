import { useEffect } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

function Nav() {
    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      }, []);
  return (
    <nav data-aos='fade-down' data-aos-duration='1000'>
        <NavLink to='/'><h1>RedOS 7</h1></NavLink>
        <ul className='nav-links'>
            <NavLink activeClassName='highlighted' to='/design'><li>Design</li></NavLink>
            <NavLink activeClassName='highlighted' to='/code'><li>Code</li></NavLink>
            <NavLink activeClassName='highlighted' to='/about'><li>About</li></NavLink>
            <li className='apply'><a href='https://discord.com/invite/hCW8V8rJRs' target='_blank' rel="noreferrer">Apply</a></li>
        </ul>
    </nav>
  );
}

export default Nav;