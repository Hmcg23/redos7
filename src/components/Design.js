import { useEffect } from 'react';
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import redos7logo from '../images/redos7logo.png'

function Design() {
  
    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      }, []);
  return (
      <section data-aos='fade-up' data-aos-duration='1000' className='design-page'>
        <h1 className='page-h1'>Design</h1>
        <div className='design-page-grid'>
          <div className='design-page-box-branding'>
            <img src={redos7logo} alt='redos7 logo' />
            <div className='design-page-text'>
              <h2>Branding</h2>
              <h3>Our branding is who we are</h3>
            </div>
          </div>
          <div className='design-page-box-colors'>
            <img src={redos7logo} alt='redos7 logo' />
            <div className='design-page-text'>
              <h2>Colors</h2>
              <h3>Our colors is what defines us</h3>
            </div>
          </div>
          <div className='design-page-box-typo'>
            <img src={redos7logo} alt='redos7 logo' />
            <div className='design-page-text'>
              <h2>Typography</h2>
              <h3>Fonts that represent us</h3>              
            </div>
          </div>
          <div className='design-page-box-graphics'>
            <img src={redos7logo} alt='redos7 logo' />
            <div className='design-page-text'>
              <h2>Graphics</h2>
              <h3>Icons that are consistent</h3>              
            </div>

          </div>    
        </div>
     
      </section>
  );
}

export default Design;