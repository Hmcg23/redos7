import { useEffect, useState } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "aos/dist/aos.css";

function Nav() {
    const [active, setActive] = useState('');

    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      }, []);
  return (
    <nav data-aos='fade-down' data-aos-duration='1000'>
        <div className='nav-components'>
            <NavLink to='/'><h1>RedOS 7</h1></NavLink>
            <FontAwesomeIcon icon={faBars} className='burger-icon' onClick={() => {
                active === '' ? setActive('active') : setActive('')
                console.log(active);
            }} />            
        </div>

        <ul className={`nav-links ${active}`}>
            <NavLink to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}><li>Home</li></NavLink>
            <NavLink to='/design' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}><li>Design</li></NavLink>
            <NavLink to='/code' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}><li>Code</li></NavLink>
            <NavLink to='/about' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}><li>About</li></NavLink>
            <li className='apply'><a href='https://discord.com/invite/hCW8V8rJRs' target='_blank' rel="noreferrer">Apply</a></li>
        </ul>
        
    </nav>
  );
}

export default Nav;