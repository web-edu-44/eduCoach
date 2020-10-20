import React, { useState } from 'react'
import './Header.css'
import { Toolbar } from '../Components/Navigation/Toolbar'

export const Header = (props) => {
    const [navbar, setNavbar] = useState(false);
    const changeBackgroud = () => {
        if (window.scrollY >= 60) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackgroud);
    return (
        <div className={navbar ? 'header scroll' : 'header'}>
            <div className='logoName'>EduCoach</div>
            <Toolbar clickHandler={props.clickHandler}
                open={props.open} />
        </div>
    )
}