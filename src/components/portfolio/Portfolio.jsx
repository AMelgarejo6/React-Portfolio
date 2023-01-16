import React from 'react';
import './portfolio.css';
import LEXOLETICS from '../../assets/lexoletics.png';
import ATHLEAD from '../../assets/athlead.png';
import RESTAURANT from '../../assets/restaurant.png';

const Portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className='portfolio__item'> 
                    <div className='portfolio__item-image'>
                        <img src={LEXOLETICS} alt='lexoletics'/>
                    </div>
                    <h3>Lexoletics Full Stack e-Commerce Application</h3>
                    <h3>Built with Python, Flask, MySQL</h3>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com/AMelgarejo6' className='btn btn-primary'>GitHub</a>
                    </div>
                </article>
                <article className='portfolio__item'> 
                    <div className='portfolio__item-image'>
                        <img src={ATHLEAD} alt='athlead'/>
                    </div>
                    <h3>Athlead Full Stack Meetup Application</h3>
                    <h3>Built with Java, Spring Boot, MySQL</h3>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com/AMelgarejo6' className='btn btn-primary'>GitHub</a>
                    </div>
                </article>
                <article className='portfolio__item'> 
                    <div className='portfolio__item-image'>
                        <img src={RESTAURANT} alt='restaurant'/>
                    </div>
                    <h3>Modern UI/UX Restaurant Website</h3>
                    <h3>Built with ReactJS, HTML, CSS</h3>
                    <div className="portfolio__item-cta">
                        <a href='https://amelgarejo6.github.io/restaurant-project/#menu' className='btn btn-primary'>See Here</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;