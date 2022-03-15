import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {ImDribbble} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://ua.linkedin.com/in/denys-rudyk-3a4563221" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/MugWait" target="_blank"><FaGithubAlt/></a>
        <a href="https://bribbble.com" target="_blank"><ImDribbble/></a>

    </div>
  )
}

export default HeaderSocials