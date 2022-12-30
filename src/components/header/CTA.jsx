import React from 'react';
import resume from '../../assets/resume.pdf';

const CTA = () => {
    return(
        <div className='cta'>
            <a href={resume} download className='btn' >Resume Download</a>
            <a className='btn btn-primary' href="#contact">Contact Me</a>
        </div>
    )
}

export default CTA;