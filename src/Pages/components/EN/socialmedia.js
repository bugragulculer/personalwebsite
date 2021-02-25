import React from 'react'
import './socialmedia.css'
import medium from '../../assets/medium.png'
import twitter from '../../assets/twitter.svg'
import spotify from '../../assets/spotify.png'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'

const SocialMedia = () => {
    return(
    <div className='SocialMedia'>
        <a className='SocialButton' href='https://open.spotify.com/user/au5qk0lfuvss0mbreim751fjq?si=_t8wF5HpR4KW974WuSGwJQ'>
            <img className='social_button_logo' src={spotify} alt="" />
        </a> 
        <a className='SocialButton' href='https://twitter.com/BugraGulculer'>
            <img className='social_button_logo' src={twitter} alt="" />
        </a> 
        <a className='SocialButton' href='https://www.instagram.com/bugragulculer'>
            <img className='social_button_logo' src={instagram} alt=""/>
        </a> 
        <a className='SocialButton' href='https://medium.com/@bugragulculer'>
            <img className='social_button_logo' src={medium} alt=""/>
        </a> 
        <a className='SocialButton' href='https://github.com/bugragulculer'>
            <img className='social_button_logo' src={github} alt=""/>
        </a>
    </div>
    )
}
export default SocialMedia