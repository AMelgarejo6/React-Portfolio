import React from 'react';
import './about.css';
import ME from '../../assets/mepic.JPG'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About Me' />
                    </div>
                </div>
            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward  className='about__icon'/>
                        <h5>Experience</h5>
                        <small>One Year Coding Experience</small>
                    </article>

                    <article className='about__card'>
                        <FiUsers  className='about__icon'/>
                        <h5>Skills</h5>
                        <small>Agile Developer</small>
                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Full-Stack Projects</h5>
                        <small>One Year Coding Experience</small>
                    </article>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci asperiores perferendis ad similique animi ratione fugiat iusto saepe praesentium alias rem fugit omnis, enim odio voluptatibus consequuntur sed eaque cumque.</p>
                <a href="#contact" className='btn btn-primary'>Contact Me</a>
            </div>
        </div>
        </section>
    )
}

export default About;