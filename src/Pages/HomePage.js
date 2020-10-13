import React from 'react';
import './HomePage.css';
import Book from '../Components/assets/booking.png'
import Chat from '../Components/assets/block-chat.png'

export const Home = ()=> {
    return (
        <div className='homePageContainer'>
            <section className='mainSection'>
                <div className='mainImg'>
                    <div className='imgCover'>
                        <section className='headerText'>
                            <h1>Welcom</h1>
                            <p>Find your dream job</p> 
                            <p>Read about success stories </p>
                            <p>Aspiring career counsellors</p>
                            <p>Talk to our career advisor</p>   
                        </section>
                    </div>
                </div>
            </section>
    
            <div className='bookNow'><img src={Book}></img></div>
            <div className='chatIcon'><img src={Chat}></img></div>
            <p>Lorem ipsum dolor sit amet consectetur, </p>
            <p>  adipisicing elit. Minima eum dicta iusto necessitatibus </p>
            <p>  a dolores, deserunt nemo maxime expedita quas.</p>
        </div>
    )
}