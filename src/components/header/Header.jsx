import React from 'react'
//import { NavLink } from 'react-router-dom';
import './style.css'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className='header'>
            <div className="js"><h1>.Js</h1></div>
            <div className="nav"> <HashLink to={'/#project'} className='link'>Project</HashLink>
                <HashLink to={'/#skill'} className='link'>Skills</HashLink>
                <HashLink to={'/#contact'} className='link'>Contact</HashLink></div>

        </div>
    )
}

export default Header;