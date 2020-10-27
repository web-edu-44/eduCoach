import React from 'react';
import './Pages.css'

export const Students = ()=> {
    return (
        <div className='pageContainer'>
            <header className='studentHeader'>
                <div>
                    <h1>Career Services and Alumni Advice</h1>
                    <ul>
                        <li>Assess your values, interests, skills and strengths</li>
                        <li>Discover career options both inside and outside academia</li>
                        <li>Build a professional network</li>
                        <li>Create/revise CVs, resumes and cover letters</li>
                        <li>Prepare for upcoming interviews</li>
                        <li>Refine communications and networking skills</li>
                    </ul>
                </div>
                <div className='studentImg'><div className='cover'></div></div>
            </header>
            
        </div>

    )
}