import React from 'react';
import './Intro.css';
import bg from '../../assets/profile.jpeg';
import { Link } from 'react-scroll';
import hire from '../../assets/hire.png';

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className='hello'>Hello</span>
        <span className='introText'>
  Hi, I'm <span className='introName'>Akanksha</span>
  <br />
  Full-Stack Developer
</span>
<p className='introPara'>
  I'm a passionate full-stack developer specializing in building dynamic and scalable web applications. 
  <br></br>
  With expertise in modern frontend technologies like HTML, CSS, and React, paired with powerful <br /> backend tools like Node.js and MongoDB, 
  I bring ideas to life with seamless functionality and <br></br>user-friendly designs.
</p>

       
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


