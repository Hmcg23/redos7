import '../App.css';

function Nav() {
  return (
    <nav>
        <h1>RedOs 7</h1>
        <ul className='nav-links'>
            <li>Design</li>
            <li>Code</li>
            <li>About</li>
            <li className='apply'>Apply</li>
        </ul>
    </nav>
  );
}

export default Nav;