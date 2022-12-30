import React from 'react';
import './header.css';
import CTA from './CTA.jsx';
import HeaderSocials from './HeaderSocials';
import mepic from '../../assets/otherme.jpg';
import ME from '../../assets/mepic.JPG';

const Header = () => {
    return(
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Anthony Melgarejo</h1>
                <h5 className="text-light">Full-Stack Developer</h5>
                <CTA />

                <HeaderSocials />

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;