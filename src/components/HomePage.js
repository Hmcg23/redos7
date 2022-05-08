import '../App.css';

function HomePage() {
  return (
      <section className='home-page'>
            <div className='header'>
                <h1>a new place for <span className='red-text'>RedOS 7</span></h1> 
            </div>
            <h2>Our new website helps members to collaborate & understand each other better. It also helps guests to apply easier.</h2>
            <div className='buttons'>
                <a href='https://discord.com/invite/hCW8V8rJRs' target='_blank' rel="noreferrer"><button>Apply</button></a>
                <button>Learn More</button>
            </div>

      </section>
  );
}

export default HomePage;