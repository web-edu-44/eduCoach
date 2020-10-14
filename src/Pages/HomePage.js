import React from 'react';
import './HomePage.css';
import Book from '../Components/assets/booking.png'
import Chat from '../Components/assets/block-chat.png'
import { Details } from './HomePageDetails'

export const Home = ()=> {
    return (
        <div className='homePageContainer'>
            <section className='mainSection'>
                <div className='mainImg'>
                    <div className='imgCover'>
                        <section className='headerText'>
                            <h1>Welcome To</h1>
                            <h3>EduCoach</h3>
                            <p> Find your dream job, 
                            Read about success stories,
                            Aspiring career counsellors, and 
                            Talk to our career advisor</p>   
                        </section>
                    </div>
                </div>
            </section>
    
            <div className='bookNow'><img src={Book} alt='BookNow'></img></div>
            <div className='chatIcon'><img src={Chat} alt='chat'></img></div>
            <section className='detailsPart'>
                <Details/>
                <Details/>
                <Details/>
                <Details/>
            </section>
        </div>
    )
}