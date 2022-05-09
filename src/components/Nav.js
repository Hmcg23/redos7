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
            <NavLink to='/design'><li>Design</li></NavLink>
            <NavLink to='/code'><li>Code</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <li className='apply'><a href='https://discord.com/invite/hCW8V8rJRs' target='_blank' rel="noreferrer">Apply</a></li>
        </ul>
        
    </nav>
  );
}

export default Nav;