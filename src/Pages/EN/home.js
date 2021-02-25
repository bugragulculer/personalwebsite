import React from 'react';
import Newsletter from '../components/EN/newsletter'
import Podcast from '../components/EN/podcast'
import './home.css'
import HeaderPicture from '../assets/header.png'
import SocialMedia from '../components/EN/socialmedia'
import MediumBlog from '../assets/mb.png'
import GT from '../assets/gt.png'
import Patreon from '../components/EN/patreon'


const Home = () => {
  return (
    <div>
      <div className='Header'>
        <div className='HeaderItem'>
          <img src={HeaderPicture} alt="" className='HeaderPicture'/>
        </div>
        <div className='HeaderItem'>
          <h2 className='HeaderH2'>Hi, I'm Bugra!</h2>
          <p className='HeaderP'>I am a junior Front-End Developer and Content Creator! I enjoy combining different professions and create unique content. You can find everything I create here!</p>
        </div>
      </div>
      <div><SocialMedia/></div>
      <div className = 'two'>
        <div class='Twoitem'><Newsletter/></div>
        <div class='Twoitem'><Podcast/></div>
      </div>
      <div className='Info'>
        <div className='Blog'>
          <div className='desc'>
            <h2 className='h2dark'>Green Tangerin</h2>
            <p className='p2dark'>Green Tangerin offers minimalist posters for your home and office. It started as a motivational act and now here we are, seeing the genius behind all the great ideas as we have never seen.</p>
            <a className='ButtonInfo' href='https://www.greentangerin.com/'>Green Tangerin Store</a> 
          </div>
          <div className='Infopic'>
            <img className='InfoIm' src={GT} alt=""/>
          </div>
        </div>
        <div className='Blog'>
            <div className='Infopic'>
              <img className='InfoIm' src={MediumBlog} alt=""/>
          </div>
          <div className='desc'>
            <h2 className='h2dark'>My Blog</h2>
            <p className='p2dark'>Everything started with my blog. I don't have a single topic to write, I write on things I found fascinating.</p>
            <a className='ButtonInfo' href='./Blog'>To The Blog!</a>
          </div>
          </div>

      </div>
      <div className='YouTubeSection'>
        <h2 className='H2YouTube'>My Latest Videos</h2>
        <div className='YouTube'>
          <iframe className='Video' src="https://www.youtube.com/embed/L9VOdPZv_X8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe className='Video' src="https://www.youtube.com/embed/cegRtIYQC4Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
        </div>
      </div>
      <Patreon/>
            </div>
  );
};

export default Home;
