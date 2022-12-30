import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
    return(
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/anthony-melgarejo-86ab50248/"><BsLinkedin /></a>
            <a href="https://github.com/AMelgarejo6"><FaGithub /></a>
        </div>
    )
}

export default HeaderSocials;