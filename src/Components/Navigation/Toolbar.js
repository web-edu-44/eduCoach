import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { HamburgerBtn } from './Hamburger';

export const Toolbar= (props)=> {
return (
    <div>
        <nav className='toolbar-nav'>
            <div className='toolbar-nav-items'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/StudentsPage'>Students</NavLink></li>
                    <li><NavLink to='/CounselorsPage'>Counselors</NavLink></li>
                    <li><NavLink to='/BlogPage'>Blog</NavLink></li>
                    <li><NavLink to='/AboutPage'>About</NavLink></li>
                </ul>
            </div>
            <HamburgerBtn   click= {props.clickHandler}
                            open= {props.open}/>
        </nav>
    </div>
)
}