import { useEffect } from 'react';
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

function Code() {
  const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
        AOS.refresh(); 
      }, []);
  return (
      <section data-aos='fade-up' data-aos-duration='1000'>
        <h1 className='page-h1'>Code</h1>
        <h1>This page is still in progress, more coming soon!</h1>         
        <button onClick={(e) => { navigate('/') }}>Go Home</button> 
      </section>
  );
}

export default Code;