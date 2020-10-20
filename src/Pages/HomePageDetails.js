import React from 'react';
import './HomePage.css';
import student from '../Components/assets/student1.jpg';
import counselor from '../Components/assets/counselor1.jpg';
import success from '../Components/assets/success2.jpg';
import blog from '../Components/assets/blog1.jpg';

export const Details = (props)=> {
    let data=[
        {
            name:'students',
            summary: 'As many students end up in careers they never antipated. You have the opportunity to experts who are more exprienced in the field you aspire to be for guidance',
            image: student,
            route: '/StudentsPage'
        },
        {
            name:'counselors',
            summary: 'Our counselors are ready to help you. They whole heartedly wants to guide to till you reach your destination!',
            image: counselor,
            route: '/CounselorsPage',
            class: 'middle'
        },
        {
            name:'blog',
            summary: 'Reading on a variety of topics and that will help widen you views. Reading impacts knowledge',
            image: blog,
            route: '/BlogPage',
            class: 'middle'
        },
        {
            name:'success stories',
            summary: 'Stories that will motivate to keep pushing learning. Success stories from students who have possitive impact from this platform',
            image: success,
            route: '/AboutPage'
        }
    ] 

    return (
        <>
            {data.map((item,indx) => 
                <div className='detailsContainer {item.class} ' key={indx}>
                    <div><h4>{item.name}</h4></div>
                    <img className='detailsImage' src={item.image} alt="ilustration"></img>
                    <p>{item.summary}</p> 
                    <a href={item.route}><button className="homeReadmore" name="homeReadmore">Readmore</button></a>
                </div>
            )}
        </>
    ); 
}