import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
// import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ajith-kumar-1088a62a1/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Ajith31kumar" target="_blank" rel="noreferrer" ><FaGithub /></a>
    
    </div>
  )
}

export default HeaderSocials