import React from 'react'
import './Header.css'

export const Header = ()=> {
    return (
    <div className='header'>
        <div className='logoName'>EduCoach</div>
        <div className='hamburgerBox'>
            <div className='hamburgerLine'></div>
            <div className='hamburgerLine'></div>
            <div className='hamburgerLine'></div>
        </div>
    </div>
    )
}