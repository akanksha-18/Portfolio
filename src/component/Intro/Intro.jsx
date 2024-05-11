import React from 'react';
import './Intro.css';
import bg from '../../assets/pic1.jpg';
import { Link } from 'react-scroll';
import hire from '../../assets/hire.png';

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className='hello'>Hello</span>
        <span className='introText'>I'm <span className='introName'>Akanksha</span><br />Full stack developer</span>
        <p className='introPara'>I'm a full-stack developer proficient in Java, excelling in both frontend and backend <br /> development. With mastery in HTML, CSS, and React for the frontend, <br /> paired with Java for backend logic.</p>
        {/* <Link><button className="btn"><img src={hire} alt="" />Hire me</button></Link> */}
        <a href="mailto:akankshadubey2558@gmail.com">
  <button className="btn">
    <img src={hire} alt="" />
    Hire me
  </button>
</a>
      </div>
      <div className="bgWrapper">
        <img src={bg} alt="" className='bg' />
      </div>
    </section>
  )
}

export default Intro;


