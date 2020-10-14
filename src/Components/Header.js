import React from 'react'
import './Header.css'
import { Toolbar } from '../Components/Navigation/Toolbar'

export const Header = (props)=> {
    return (
    <div className='header'>
        <div className='logoName'>EduCoach</div>
        <Toolbar clickHandler={props.clickHandler}
                 open={props.open}/>
    </div>
    )
}