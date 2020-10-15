import React from 'react';
import './HomePage.css';

export const Details = (props)=> {
    let data=[
        {
            name:'students',
            summary: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur'
        },
        {
            name:'counselors',
            summary: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur'
        },
        {
            name:'blog',
            summary: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur'
        },
        {
            name:'about us',
            summary: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur'
        }
    ]

    return (
        <>
            {data.map(i => 
                <div className='detailsContainer'>
                    <div><h4>{i.name}</h4></div>
                    <p>{i.summary}</p>
                </div>
            )}
        </>
    );
}