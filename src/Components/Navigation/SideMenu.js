import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const SideMenu = (props)=> {
return (
    <div>
        <nav className='side-nav'>
            <ul>
                <li><NavLink to='/' onClick={props.closeHandler}>Home</NavLink></li>
                <li><NavLink to='/StudentsPage' onClick={props.closeHandler}>Students</NavLink></li>
                <li><NavLink to='/CounselorsPage' onClick={props.closeHandler}>Counselors</NavLink></li>
                <li><NavLink to='/BlogPage' onClick={props.closeHandler}>Blog</NavLink></li>
                <li><NavLink to='/AboutPage' onClick={props.closeHandler}>About</NavLink></li>
            </ul>
        </nav>
        <div className='back-drop' onClick={props.closeHandler}/>
    </div>
)
}