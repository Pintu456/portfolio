import React from 'react'
import './style.css'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import Project from '../projects/Project';
import Skill from '../skills/Skill';
import Contact from '../contact/Contact';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="heading">
                    <h1>Hi, I am Pintu Kumar</h1>
                </div>
                <div className="front"><h3>A frontend engineer</h3></div>
                <div className="about"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, porro asperiores voluptatum tenetur voluptates sit ex soluta, non laboriosam aut culpa unde quaerat nobis. Rerum, omnis expedita. Adipisci, velit necessitatibus!</p></div>
                <div className="info">
                    <div className="resume"><button className='button'>Resume</button></div>
                    <div className="github"><AiOutlineGithub className='git' /></div>
                    <div className="linkdin"><AiFillLinkedin className='linkd' /></div>



                </div>


            </div>
            <Project />
            <Skill />
            <Contact />

        </>
    )
}

export default Hero