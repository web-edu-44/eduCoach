import React from 'react';
import './Navbar.css';

export const HamburgerBtn = (props) => {
    let classes= 'hamburger';

       if(props.open) {
           classes= 'hamburger open'
       }
       return(
    <div className={classes} onClick={props.click}><div></div></div>
    );
}