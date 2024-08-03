import React, { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HorizontalBox from './HorizontalBox';
import Timeline from './Timeline';
import Project from './Project';
import './Introduction.css';
import ContactForm from './ContactForm';
import VerticalBox from './VericalBox';

import { FaHome, FaUser, FaCogs, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Introduction = () => {
  const contactFormRef = useRef(null);
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      // Animate .body and .para elements
      gsap.utils.toArray('.body1').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, scale: 0.8, y: 100 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
             
            },
          }
        );
      });
  
      gsap.utils.toArray('.para1').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 70%",
              scrub: true,
            
            },
          }
        );
      });
  
    }, []);
  
  return (
    <>
      <div className='main-body'>
      <section id="home">
        <HorizontalBox icon={FaHome} text="INTRODUCTION" />
  
        <div className="opacity-0 translate-y-10 body body1" style={{ color: 'whitesmoke' }}>
          <h1 style={{ fontFamily: 'montserrat', fontSize: '3.7rem' }}>
            Say Hi from <span style={{ color: '#86C232' }}>Riddhi </span>,
          </h1>
          <h1 style={{ fontSize: '3.4rem', fontFamily: 'montserrat' }}>UI/UX Designer and Developer</h1>
          <p className="para para1" style={{ color: 'grey' }}>
            I am Riddhi Rustagi, a pre-final year Computer Science engineering student at Indira Gandhi Delhi Technical University for Women.
            Until now in my undergraduate studies, I have developed a strong interest in programming with C++ and web development. I have learned HTML, CSS, Bootstrap, JavaScript, and React.js and redux toolkit. I am currently working to become proficient with RESTful APIs, Node.js, Express.js, MongoDB, and typescript. In addition to my technical skills, I am passionate about building efficient and user-friendly web applications 
            and continuously seek opportunities to expand my knowledge and experience in the field.
          </p>
        </div>
        </section>
        <section id="about">
        <HorizontalBox icon={FaUser} text="ABOUT"/>
        <div className="opacity-0 translate-y-10 body body1" style={{ color: 'whitesmoke' }}>
          <h1 style={{ fontFamily: 'montserrat', fontSize: '3.7rem' }}>
            Every great design begin with
            an even <span style={{ color: '#86C232' }}>better story</span>.
          </h1>
          <p className="para para1" style={{ color: 'grey', textAlign: 'center' }}>
            In high school, I had no idea about programming and was focused on biology. However, as I approached graduation, I began to reconsider my future and decided to pursue engineering. The challenge of solving problems and creating innovative solutions sparked a new curiosity in me. Initially, programming felt like a foreign language, but with persistence, I discovered a passion for it, especially in web development. Now,
            I love creating web projects and tackling programming challenges, transforming my initial curiosity into a full-fledged passion for technology.
          </p>
        </div>
        </section>
        
        <section id="education">
        <HorizontalBox icon={FaCogs} text="EDUCATION"/>
        <h1 className='body1' style={{ fontFamily: 'montserrat', fontSize: '3.7rem', color: 'whitesmoke' }}>
          Education and <span style={{ color: '#86C232' }}>Experience</span>.
        </h1>
        <div className='para1'><Timeline/></div>
        </section>
        
        <section id="skills">
        <HorizontalBox icon={FaProjectDiagram} text="SKILLS" />
        <h1 className='body1' style={{ fontFamily: 'montserrat', fontSize: '3.7rem', color: 'whitesmoke' }}>
          My Capabilities and <span style={{ color: '#86C232' }}>Skills</span>.
        </h1>
        <div className='skill-box para1'>
          <VerticalBox logoSrc='/html.png' title="HTML5" />
          <VerticalBox logoSrc='/CSS-Logo.png' title="CSS3" />
          <VerticalBox logoSrc='/javaScript_logo.png' title="JavaScript" />
        </div>
        <div className='skill-box' style={{ paddingBottom: '10rem' }}>
          <VerticalBox logoSrc='/logo192.png' title="react js" />
          <VerticalBox logoSrc='/bootstrap.png' title="Bootstrap" />
          <VerticalBox logoSrc='/figma.png' title="Figma" />
        </div>
        </section>
        <h1 className='body1' style={{ fontFamily: 'montserrat', fontSize: '3.7rem', color: 'whitesmoke' }}>
          Featured <span style={{ color: '#86C232' }}>Projects</span>
        </h1>

        <section id="projects" style={{marginBottom:'10rem'}}>
        <div className="project-grid para1">
          <Project
            title="Project 1"
            imageSrc='/Project1.png'
            description="E-commerce cart management website with react and redux toolkit."
            demoLink="https://food-pigeon.vercel.app/"
            githubLink="https://github.com/Riddhi050803/Food--Pigeon"
          />
          <Project
            title="Project 2"
            imageSrc='/project2.png'
            description="Portfolio website with unique UI and interactive features."
            demoLink="https://example.com/demo2"
            githubLink="https://github.com/example/project2"
          />
        </div>
        <div className="project-grid">
          <Project
            title="Project 3"
            imageSrc='/project3.png'
            description="UI design of Job Portal mobile application using figma with theme options."
            demoLink="https://www.figma.com/proto/26bcyPp5BX4niHknokkEbQ/Job-Portal-Design-(Community)?node-id=215-268&t=Jbtlaj5YSdjzXw73-1&starting-point-node-id=215%3A268"
            githubLink="https://github.com/example/project3"
          />
          <Project
            title="Project 4"
            imageSrc='/project4.png'
            description="This website creates short URLs for any given URL and allows users to check click analytics for specific URLs.
             The tech stack used includes EJS, Node.js, and Express.js.
             Tools like Postman are used, along with dependencies such as cookie-parser, tokens, and nanoid."
            demoLink="https://example.com/demo4"
            githubLink="https://github.com/Riddhi050803/short-url-node"
          />
        </div>
        </section>
        
        <section id="contact">
        <HorizontalBox icon={FaEnvelope} text="Lets talk" />
        <h1 className='body1' style={{ fontFamily: 'montserrat', fontSize: '3.7rem', color: 'whitesmoke' }}>
          Contact <span style={{ color: '#86C232' }}>Me!</span>
        </h1>
        <div  className="contact-form-container para1">
          <ContactForm />
        </div>
        </section>
      </div>
    </>
  );
};

export default Introduction;
