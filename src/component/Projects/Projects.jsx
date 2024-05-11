// import React from 'react';
// import './Projects.css';
// import first from '../../assets/yt.png';
// import second from '../../assets/Resume.png';
// import third from '../../assets/hackerrank.png';
// import speech from '../../assets/speech.png';
// import  restro from '../../assets/restro.png';
// import AI from '../../assets/image.png';

// const Projects=()=> {
//   return (
//    <section id='works'>
//      <h2 className="worksTitle">My Portfolio</h2>
//      <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experirnce to help businesses achieve their goals and create a strong online presence
//       </span>
//       <div className="worksImgs">

//        <div className="worksImgContainer">
           
//                 <img src={first} alt="" className="worksImg" />
           
//         </div>
//         <div className="worksImgContainer">
           
//                 <img src={second} alt="" className="worksImg" />
            
//         </div>
//         <div className="worksImgContainer">
           
//                 <img src={third} alt="" className="worksImg" />
          
//         </div>
//         <div className="worksImgContainer">
           
//                 <img src={AI} alt="" className="worksImg" />
          
//         </div>
//         <div className="worksImgContainer">
           
//                 <img src={speech} alt="" className="worksImg" />
          
//         </div>
//         <div className="worksImgContainer">
           
//                 <img src={restro} alt="" className="worksImg" />
          
//         </div>
//       </div>
      
//    </section>
//   )
// }

// export default Projects
import React from 'react';
import './Projects.css';
import first from '../../assets/yt.png';
import second from '../../assets/Resume.png';
import third from '../../assets/hackerrank.png';
import speech from '../../assets/speech.png';
import restro from '../../assets/restro.png';
import AI from '../../assets/image.png';

const projectsData = [
  { title: 'YouTube Clone', image: first, link: 'https://akanksha-18.github.io/yt/' },
  { title: 'Resume Builder', image: second, link: 'https://akanksha-18.github.io/Geekathon_Javascript/interview/index.html' },
  { title: 'HackerRank Solutions', image: third, link: 'https://akanksha-18.github.io/Hackerrank/Akanksha/index.html' },
  { title: 'Speech To Text  App', image: speech, link: 'https://project4-react-speechtotext.vercel.app/' },
  { title: 'Restaurant Website', image: restro, link: 'https://akanksha-18.github.io/FoodWeb_React/' },
  { title: 'AI Bot', image: AI, link: 'https://akanksha-18.github.io/Mini-Projects/Gemini/index.html' }
];

const Projects = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
      <div className="worksContainer">
        {projectsData.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} className="cardImage" />
            <div className="cardContent">
              <h3 className="cardTitle">{project.title}</h3>
              <a href={project.link} className="cardLink" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;

