import React from 'react'
import Logo from '../assets/bugra.png'
import medium from '../assets/medium.png'
import twitter from '../assets/twitter.svg'
import spotify from '../assets/spotify.png'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'
import youtube from '../assets/youtube_b.svg'
import { Menulist } from './menulist'
import './footer.css'
import { Link } from 'react-router-dom'


const Footer =() => {
        return (
            <footer className = 'Footer'>
                <div className='FooterColumns'>
                    <div className='Footercolumn' >
                        <Link to='/' className='Logo'>
                            <img src = {Logo} alt='Logo' className='bugra_Logo' ></img>
                        </Link>
                    </div>
                    <div  className='Footercolumn'>
                        <ul className='FooterMenu' >
                            {Menulist.map((item) => {
                                return <div key={item.id} className='FooterMenuItem'>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </div>
                            })}   
                        </ul>
                    </div>
                    <div  className='Footercolumn' >
                        <h2 className='Follow'>
                            FOLLOW ME ON;
                        </h2>
                        <div className='SocialAccounts' >
                           <a  href='https://open.spotify.com/user/au5qk0lfuvss0mbreim751fjq?si=_t8wF5HpR4KW974WuSGwJQ'className = 'Social'>
                                <img src={instagram} alt='InstagramLogo' className='SocialLogo' ></img>
                                <h3 className='SocialText'>Instagram</h3>
                            </a>
                            <a href='https://twitter.com/BugraGulculer' className='Social'>
                                <img src={twitter} alt='TwitterLogo' className='SocialLogo' ></img>
                                <h3 className='SocialText'>Twitter</h3>
                            </a>
                            <a href='https://www.instagram.com/bugragulculer' className='Social'>
                                <img src={medium} alt='MediumLogo' className='SocialLogo' ></img>
                                <h3 className='SocialText'>Medium</h3>
                            </a>
                            <a href='https://medium.com/@bugragulculer' className='Social'>
                                <img src={spotify} alt='SpotifyLogo' className='SocialLogo' ></img>
                                <h3 className='SocialText'>Spotify</h3>
                            </a>
                            <a href='https://www.youtube.com/channel/UCbxvcNnIvtiF_1VZKMPyWCA' className='Social'>
                                <img src={youtube} alt='YouTubeLogo' className='SocialLogo' ></img>
                                <h3 className='SocialText'>YouTube</h3>
                            </a>
                            <a href='https://github.com/bugragulculer' className='Social'>
                                <img src={github} alt='githubLogo' className='SocialLogo' ></img>
                                <h3 className='SocialText'>GitHub</h3>
                            </a>
                            </div>
                    </div>
                </div>
                <h4 className='Copyright'>Copyright © 2020 Bugra Gulculer. All rights reserved.</h4>
            </footer>

        );
}


export default Footer
