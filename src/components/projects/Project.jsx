import React from 'react'
import './style.css';
import { BsGithub } from 'react-icons/bs'
import { CiShare1 } from 'react-icons/ci'
const Project = () => {
    return (
        <div id='project'>
            <h2>Projects</h2>
            <div className='project'>

                <div className="head1">
                    <h3>Project 1</h3>

                    <div className="para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus perferendis nemo quasi ratione, unde accusamus sequi doloribus rem maxime accusantium quas at? Ipsa sit dicta quod sapiente minus quo.</p>
                    </div>
                    <div className="tech"><p>html</p><p>css</p><p>reacjs</p></div>
                    <div className="profile">
                        <BsGithub className='gitp' />
                        <CiShare1 className='share' />
                    </div>
                </div>

                <div className="head1">
                    <h3>Project 2</h3>

                    <div className="para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus perferendis nemo quasi ratione, unde accusamus sequi doloribus rem maxime accusantium quas at? Ipsa sit dicta quod sapiente minus quo.</p>
                    </div>
                    <div className="tech"><p>html</p><p>css</p><p>reacjs</p></div>
                    <div className="profile">
                        <BsGithub className='gitp' />
                        <CiShare1 className='share' />
                    </div>
                </div>
                <div className="head1">
                    <h3>Project 3</h3>

                    <div className="para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit delectus perferendis nemo quasi ratione, unde accusamus sequi doloribus rem maxime accusantium quas at? Ipsa sit dicta quod sapiente minus quo.</p>
                    </div>
                    <div className="tech"><p>html</p><p>css</p><p>reacjs</p></div>
                    <div className="profile">
                        <BsGithub className='gitp' />
                        <CiShare1 className='share' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project